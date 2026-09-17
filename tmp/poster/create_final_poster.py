from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import random

ROOT = '/Users/alexchandrahanif/project/sintong/lombalariramadhan'
OUT = f'{ROOT}/src/assets/web/jadwal-final-pemuda-cup-iii.jpg'
W, H = 1600, 1000

def font(size, bold=False):
    path = '/System/Library/Fonts/SFNS.ttf' if not bold else '/System/Library/Fonts/SFNS.ttf'
    return ImageFont.truetype(path, size)

def fit_logo(path, size):
    logo = Image.open(path).convert('RGBA')
    logo.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(logo, ((size-logo.width)//2, (size-logo.height)//2))
    return canvas

img = Image.new('RGB', (W, H), '#07090d')
draw = ImageDraw.Draw(img)

# Layered stadium-light background.
for y in range(H):
    t = y / H
    draw.line((0, y, W, y), fill=(int(10 + 25*t), int(10 + 3*t), int(14 + 2*t)))

random.seed(19)
for _ in range(160):
    x = random.randint(0, W)
    y = random.randint(0, H)
    r = random.choice([1, 1, 2, 3])
    color = random.choice([(255, 176, 0), (255, 73, 25), (255, 255, 255)])
    draw.ellipse((x-r, y-r, x+r, y+r), fill=color)

for cx, cy, color in [(100, 220, (255, 100, 20)), (1500, 210, (255, 180, 30))]:
    glow = Image.new('RGBA', (W, H), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    for radius in range(250, 20, -12):
        alpha = int(2 + 40 * (1 - radius/250))
        gd.ellipse((cx-radius, cy-radius, cx+radius, cy+radius), fill=(*color, alpha))
    img = Image.alpha_composite(img.convert('RGBA'), glow)
draw = ImageDraw.Draw(img)

# Diagonal energy strokes.
for offset in range(-300, 1900, 95):
    draw.line((offset, H, offset+520, 0), fill=(125, 20, 12, 120), width=5)
for offset in range(-500, 1800, 150):
    draw.line((offset, H, offset+420, 180), fill=(255, 163, 0, 70), width=2)

# Header.
draw.rounded_rectangle((70, 48, 1530, 265), radius=28, fill=(5, 6, 9, 235), outline=(255, 176, 0, 255), width=3)
event_logo = fit_logo(f'{ROOT}/src/assets/pemuda-cup-logo-transparent.png', 180)
img.alpha_composite(event_logo, (95, 66))
draw.text((315, 70), 'PEMUDA CUP III SINTONG 2026', font=font(34, True), fill='#ffb000')
draw.text((315, 112), 'PENENTUAN JUARA', font=font(79, True), fill='white')
draw.text((318, 205), 'SABTU, 19 SEPTEMBER 2026  •  LAPANGAN PUTRI HIJAU', font=font(25, True), fill='#ff5a28')

def match_panel(box, label, time_text, left_name, left_logo, right_name, right_logo, accent):
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=28, fill=(9, 15, 24, 238), outline=accent, width=4)
    draw.rounded_rectangle((x1+20, y1+18, x2-20, y1+72), radius=16, fill=accent)
    draw.text(((x1+x2)//2, y1+44), label, font=font(25, True), fill='#080b10', anchor='mm')
    left = fit_logo(left_logo, 145)
    right = fit_logo(right_logo, 145)
    img.alpha_composite(left, (x1+42, y1+102))
    img.alpha_composite(right, (x2-187, y1+102))
    draw.text((x1+210, y1+122), left_name, font=font(30, True), fill='white', anchor='lm')
    draw.text((x2-210, y1+122), right_name, font=font(30, True), fill='white', anchor='rm')
    draw.ellipse(((x1+x2)//2-54, y1+105, (x1+x2)//2+54, y1+213), fill='#ff5a28', outline='white', width=5)
    draw.text(((x1+x2)//2, y1+159), 'VS', font=font(34, True), fill='white', anchor='mm')
    draw.text(((x1+x2)//2, y1+250), time_text, font=font(48, True), fill=accent, anchor='mm')

match_panel(
    (70, 305, 1530, 585), 'PEREBUTAN POSISI 3', '15.25 WIB',
    'ELTHAR FC', f'{ROOT}/src/assets/web/elthar.webp',
    '08 ROKAN FARM', f'{ROOT}/src/assets/web/rokanfarm.webp', '#c7d2df'
)
match_panel(
    (70, 615, 1530, 895), 'GRAND FINAL', '16.40 WIB',
    'BESCEMP POSS X RUWO B', f'{ROOT}/src/assets/web/basecamp.webp',
    'AL-QARNY X SUANG SADU', f'{ROOT}/src/assets/web/alqarny.webp', '#ffb000'
)

draw.text((W//2, 952), 'DUA LAGA TERAKHIR • SATU HARI PENENTUAN', font=font(26, True), fill='white', anchor='mm')

img.convert('RGB').save(OUT, quality=90, optimize=True)
