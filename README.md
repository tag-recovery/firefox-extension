# Tag Recovery - Firefox Extension

## Usage

Save and recover your tags&mdash;form data&mdash;for each username in all of your Dreamwidth role play communities.


## Installation & Setup

To install the required libraries for this project, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.

2. Run the following command in your terminal to install the dependencies listed in the package.json file:

    ```bash
    $ npm install
    ```

3. Once the installation is complete, run the following command in your terminal to generate a build folder:

    ```bash
    $ npm run build
    ```

## Loading the Extension in Firefox

To load the extension temporarily in your local Firefox browser, follow these steps:

1. Open Firefox and type `about:debugging` in the address bar.

1. Click on the "This Firefox" tab on the left sidebar.

1. Click on the "Load Temporary Add-on" button.

1. Navigate to the project folder and select the `manifest.json` file or the `index.html` file.

1. The extension will be loaded and you can start using it in your browser.

> [!IMPORTANT]
> You may need to adjust the settings of this add-on in order to test this extension. Change `Extension Can Read and Change Data:` to `Always Allow on Dreamwidth.org`.


## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.

2. Create a new branch for your feature or bug fix.

3. Make your changes and test them thoroughly.

4. Commit your changes and push them to your forked repository.

5. Submit a pull request, describing the changes you have made.

## License

This project is licensed under the [MIT License](LICENSE).
