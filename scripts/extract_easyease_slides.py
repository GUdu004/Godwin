import fitz # PyMuPDF
import os

pdf_path = r"d:\GitHub\Godwin\GodwinUdu_ProductDesign_EdTech.pdf"
output_dir = os.path.join("public", "images", "projects", "easyease")

os.makedirs(output_dir, exist_ok=True)

print(f"Opening PDF: {pdf_path}")
doc = fitz.open(pdf_path)
print(f"Total Pages: {len(doc)}")

# Render each page to 2x resolution PNG
zoom = 2.0
matrix = fitz.Matrix(zoom, zoom)

for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    
    slide_num = page_num + 1
    file_name = f"slide_{slide_num:02d}.png"
    full_path = os.path.join(output_dir, file_name)
    
    pix.save(full_path)
    print(f"Saved {file_name} ({pix.width}x{pix.height})")

print("EasyEase PDF slide extraction complete!")
