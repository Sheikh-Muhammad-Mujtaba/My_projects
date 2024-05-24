# QR Code Generator

This is a simple QR code generator tool built using Python. The tool allows users to create customized QR codes by specifying the data, QR code version, box size, border width, and file name.

## Requirements

To run this script, you need to have the following dependencies installed:

- `qrcode[pil]`

You can install the necessary dependencies using the following command:

```sh
pip install -r requirements.txt
```
## Features

The QR code generator includes the following features:

- **Data Encoding**: Prompts the user to enter the data to be encoded in the QR code.
- **Version Selection**: Allows the user to choose the version of the QR code (a value between 1 and 40). The default version is 8 if not specified.
- **Box Size Customization**: Allows the user to specify the box size (the size of each module in the QR code). The default box size is 150 if not specified.
- **Border Width Customization**: Allows the user to specify the border width (the width of the quiet zone around the QR code). The default border width is 2 if not specified.
- **File Naming**: Allows the user to specify the file name for saving the QR code image. The default file name is `qr_code.png` if not specified.

---

## Usage

To use the QR code generator, follow these steps:

1. Ensure you have Python installed on your system.
2. Install the required dependencies by running:

    ```sh
    pip install -r requirements.txt
    ```

3. Run the script:

    ```sh
    python qr_code_generator.py
    ```

4. Follow the prompts to enter the data, version, box size, border width, and file name.
5. The QR code image will be generated and saved to the specified file name.

## Example

Here's an example of how to use the tool:

```sh
Enter the data to be encoded in the QR code: https://example.com
Enter the version of the QR code (1-40), press Enter for default (8): 
Enter the box size of the QR code, press Enter for default (150): 
Enter the border width of the QR code, press Enter for default (2): 
Enter the file name to save the QR code (e.g., 'my_qr_code.png'), press Enter for default ('qr_code.png'): example_qr.png
```
After following these steps, a QR code image will be generated and saved as `example_qr.png`.

---

## Conclusion

This simple QR code generator is a handy tool for creating customized QR codes. Feel free to modify the script to add more features or customize it further according to your needs.

If you encounter any issues or have any suggestions, please feel free to contribute or reach out.
