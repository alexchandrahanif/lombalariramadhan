from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'src' / 'assets'
OUTPUT = ROOT / 'public' / 'og-share'
SIZE = (1200, 630)

IMAGES = {
    'hasil-sman3-tunasmuda.png': 'sman3a-tunasmuda.jpg',
    'hasil-alqarny-handayani.png': 'alqarny-handayani.jpg',
    'hasil-elthar-brimox.png': 'elthar-brimox.jpg',
    'hasil-sman3b-casper.png': 'sman3b-casper.jpg',
    'hasil-arwana-pondokhantu.png': 'arwana-pondokhantu.jpg',
    'hasil-eterna-kobatama.png': 'eterna-kobatama.jpg',
    'hasil-bescempb-rokanfarm.png': 'bescempb-rokanfarm.jpg',
}


def cover(image, size):
    ratio = max(size[0] / image.width, size[1] / image.height)
    resized = image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)
    left = (resized.width - size[0]) // 2
    top = (resized.height - size[1]) // 2
    return resized.crop((left, top, left + size[0], top + size[1]))


def contain(image, size):
    copy = image.copy()
    copy.thumbnail(size, Image.Resampling.LANCZOS)
    return copy


OUTPUT.mkdir(parents=True, exist_ok=True)
for source_name, output_name in IMAGES.items():
    original = Image.open(SOURCE / source_name).convert('RGB')
    background = cover(original, SIZE).filter(ImageFilter.GaussianBlur(28))
    background = ImageEnhance.Brightness(background).enhance(.32)
    foreground = contain(original, (1110, 590))
    x = (SIZE[0] - foreground.width) // 2
    y = (SIZE[1] - foreground.height) // 2
    background.paste(foreground, (x, y))
    background.save(OUTPUT / output_name, 'JPEG', quality=84, optimize=True, progressive=True)
