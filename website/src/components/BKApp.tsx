import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

// NOTE: Uncomment if you would like to have Bokeh in the console, after you start the
//       site with yarn.
// import * as Bokeh from "@bokeh/bokehjs";

export const BKApp = () => {
  const containerRef = useRef(null);
  return (
    <BrowserOnly fallback={<div>loading...</div>}>
      {() => {
        const Bokeh = require("@bokeh/bokehjs");

        // Initialize the widget value.
        const init_value = 1;

        // Compute data using the initial widget value, and create a Bokeh source.
        const x = [...Array(10).keys()];
        let y = [];
        for (let i = 0; i < x.length; i++) {
          y.push(init_value * x[i]);
        }
        const source = new Bokeh.ColumnDataSource({ data: { x: x, y: y } });

        // Create the figure, and attach the data to it.
        const fig = Bokeh.Plotting.figure();
        fig.line({
          x: { field: "x" },
          y: { field: "y" },
          source: source,
        });

        // Create the widget.
        const select = new Bokeh.Widgets.Select({
          value: init_value.toString(),
          options: [...Array(3).keys()].map((value) => {
            return value.toString();
          }),
          title: "slope",
        });

        // Callback for the widget.
        const update = (select, source, fig) => {
          console.log(select);
          let value = select.value;
          let x = source.data.x;
          let y = source.data.y;
          // Calculate new data.
          const newY = [];
          for (let i = 0; i < y.length; i++) {
            newY.push(parseInt(value) * x[i]);
          }

          // Listen for changes from the widget.
          select.js_event_callbacks["menu_item_click"] = [
            new Bokeh.CustomJS({
              args: { select, source, fig },
              code: update(select, source, fig),
            }),
          ];

          // Update the source with the new data.
          source.data.y = newY;
          source.change.emit();
          // Emit changes to the figure.
          fig.change.emit();
        };

        // Visualize.
        const layout = new Bokeh.Column({ children: [select, fig] });
        if (containerRef && containerRef.current) {
          containerRef.current.innerHTML = "";
          Bokeh.Plotting.show(layout, containerRef.current);
        }
        return <div ref={containerRef} style={{ width: "100%" }}></div>;
      }}
    </BrowserOnly>
  );
};
