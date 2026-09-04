from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'og-share'
LOGO = Image.open(ROOT / 'public' / 'pemuda-cup-logo.png').convert('RGBA')
WIDTH, HEIGHT = 1200, 630

FONT = '/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf'
FONT_HEAVY = '/System/Library/Fonts/Supplemental/Impact.ttf'

POSTERS = [
    ('group.png', 'GROUP', 'PEMBAGIAN TIM', 'GROUP A · B · C · D', (255, 176, 0)),
    ('pertandingan.png', 'PERTANDINGAN', 'JADWAL & HASIL', 'PEMUDA CUP III · 2026', (255, 73, 27)),
    ('berita.png', 'BERITA', 'KABAR TERBARU', 'CERITA DARI LAPANGAN', (22, 156, 255)),
]


def font(size, heavy=False):
    return ImageFont.truetype(FONT_HEAVY if heavy else FONT, size)


def make_poster(filename, title, kicker, footer, accent):
    image = Image.new('RGB', (WIDTH, HEIGHT), '#03070d')
    pixels = image.load()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            glow = max(0, 1 - (((x - 905) / 580) ** 2 + ((y - 280) / 470) ** 2))
            pixels[x, y] = (
                int(3 + accent[0] * glow * .12),
                int(7 + accent[1] * glow * .12),
                int(13 + accent[2] * glow * .12),
            )

    draw = ImageDraw.Draw(image, 'RGBA')
    random.seed(title)
    for _ in range(34):
        y = random.randint(-120, HEIGHT + 80)
        thickness = random.randint(2, 14)
        opacity = random.randint(12, 42)
        draw.polygon([(0, y), (WIDTH, y - random.randint(90, 210)), (WIDTH, y - random.randint(70, 185)), (0, y + thickness)], fill=(*accent, opacity))

    draw.polygon([(0, 0), (610, 0), (420, HEIGHT), (0, HEIGHT)], fill=(2, 8, 16, 224))
    draw.rectangle((65, 70, 73, 555), fill=(*accent, 255))
    draw.text((105, 91), 'TURNAMEN MINI SOCCER SINTONG', font=font(25), fill=(*accent, 255))
    draw.text((102, 162), kicker, font=font(37), fill=(194, 204, 216, 255))

    title_font = font(112 if len(title) < 10 else 81, heavy=True)
    draw.text((100, 215), title, font=title_font, fill=(255, 255, 255, 255), stroke_width=3, stroke_fill=(10, 14, 20, 255))
    title_box = draw.textbbox((100, 215), title, font=title_font, stroke_width=3)
    draw.rectangle((103, title_box[3] + 12, min(title_box[2], 570), title_box[3] + 23), fill=(*accent, 255))

    draw.text((105, 485), footer, font=font(29), fill=(255, 255, 255, 245))
    draw.text((105, 527), 'PEMUDA CUP III SESINTONG', font=font(22), fill=(117, 133, 151, 255))

    logo = LOGO.copy()
    logo.thumbnail((430, 430), Image.Resampling.LANCZOS)
    shadow = Image.new('RGBA', logo.size, (0, 0, 0, 0))
    shadow.alpha_composite(logo)
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    image.paste(shadow, (703, 105), shadow)
    image.paste(logo, (690, 88), logo)

    draw = ImageDraw.Draw(image, 'RGBA')
    draw.rounded_rectangle((720, 515, 1118, 562), radius=4, fill=(3, 7, 13, 210), outline=(*accent, 135), width=2)
    label = 'SINTONG · 2026 · SPORTIVITAS'
    box = draw.textbbox((0, 0), label, font=font(21))
    draw.text((919 - (box[2] - box[0]) / 2, 527), label, font=font(21), fill=(233, 237, 242, 255))

    image.save(OUTPUT / filename, quality=95)


OUTPUT.mkdir(parents=True, exist_ok=True)
for poster in POSTERS:
    make_poster(*poster)
