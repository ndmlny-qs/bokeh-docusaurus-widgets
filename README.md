# Installation

Use `conda` to install the dependencies.

```bash
conda env create --file environment.yml
```

After all dependencies are installed, activate the virtual environment.

```bash
conda activate bokeh-docusaurus-widgets
```

Once your virtual environment is active, change directories into the `website` folder
and install all `node` modules needed for the website.

```bash
cd website
yarn
```

# Running

Once all the packages are installed, you can start a Jupyter Lab session in the top
directory with the following command.

```bash
jupyter lab
```

Navigate to the URL shown in the console, and run the `widget.ipynb` to get the Python
version of the figure.

To run the Docusaurus version, in a new terminal navigate to the website folder,
activate the conda environment, and run the following.

```bash
yarn start
```

Your default browser will open the Docusaurus site, and you can navigate to the page
with the figure and widgets by clicking the `Docs` link, or the `Docusaurus` button on
the landing page.
