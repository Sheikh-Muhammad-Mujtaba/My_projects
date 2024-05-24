# This line imports the `qrcode` module, which is a library for generating QR codes.
import qrcode

# defines a function called `generate_qr_code` that contains the main logic of the script.
def generate_qr_code():

    # This line prompts the user to enter the data they want to encode in the QR code. The input is stored in the `data` variable.
    data = input("Enter the data to be encoded in the QR code: ") 
    
    # This line prompts the user to enter the version of the QR code (a value between 1 and 40). If the user doesn't enter anything, the default value of 8 is used. The input is converted to an integer using the `int()` function.
    version = int(input("Enter the version of the QR code (1-40), press Enter for default (8): ") or 8) 
    
    # This line prompts the user to enter the box size of the QR code (the size of each module in the QR code). If the user doesn't enter anything, the default value of 150 is used.
    box_size = int(input("Enter the box size of the QR code, press Enter for default (150): ") or 150)
    
    # This line prompts the user to enter the border width of the QR code (the width of the quiet zone around the QR code). If the user doesn't enter anything, the default value of 2 is used.
    border = int(input("Enter the border width of the QR code, press Enter for default (2): ") or 2)
    
    # This line prompts the user to enter the file name to save the QR code image. If the user doesn't enter anything, the default file name 'qr_code.png' is used.
    file_name = input("Enter the file name to save the QR code (e.g., 'my_qr_code.png'), press Enter for default ('qr_code.png'): ") or 'qr_code.png'

    # This line creates a `QRCode` object with the specified version, box size, border, and error correction level.
    qr = qrcode.QRCode(
        version=version,
        box_size=box_size,
        border=border,
        error_correction=qrcode.constants.ERROR_CORRECT_H
    )

    # This line adds the user-input data to the QR code object.
    qr.add_data(data)

    # This line generates the QR code image based on the data and settings.
    qr.make(fit=True)

    # This line creates an image from the QR code with a black fill color and a white background.
    img = qr.make_image(fill_color="black", back_color="white")

    # This line saves the QR code image to the specified file name.
    img.save(file_name)

# This line prints a success message to the console, indicating that the QR code has been 
    print(f"QR code generated and saved as {file_name}")


generate_qr_code()







