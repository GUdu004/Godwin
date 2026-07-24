import fitz # PyMuPDF
import os

pdf_path = os.path.join("public", "GodwinUdu_Portfolio_ProductDesign.pdf")
output_dir = os.path.join("public", "images", "slides")
proptii_dir = os.path.join("public", "images", "projects", "proptii")
myedufusion_dir = os.path.join("public", "images", "projects", "myedufusion")

os.makedirs(output_dir, exist_ok=True)
os.makedirs(proptii_dir, exist_ok=True)
os.makedirs(myedufusion_dir, exist_ok=True)

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
    
    # Categorize key slides for Proptii (Cover/Intro ~ slides 1-22) and MyEduFusion (slides 23-30)
    if 1 <= slide_num <= 22:
        pix.save(os.path.join(proptii_dir, file_name))
    if 23 <= slide_num <= 30 or slide_num == 1:
        pix.save(os.path.join(myedufusion_dir, file_name))

print("PDF slide extraction complete!")
