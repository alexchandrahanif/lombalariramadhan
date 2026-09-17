from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

OUTPUT = "/Users/alexchandrahanif/project/sintong/lombalariramadhan/output/pdf/Undangan-Final-dan-Penutupan-Pemuda-Cup-III.pdf"
LOGO = "/Users/alexchandrahanif/project/sintong/lombalariramadhan/tmp/pdfs/logo-pemuda-cup-final.png"

PAGE_WIDTH, PAGE_HEIGHT = A4
BLACK = HexColor("#151515")
ORANGE = HexColor("#151515")
GOLD = HexColor("#FFFFFF")
INK = HexColor("#172033")
MUTED = HexColor("#596273")
PALE = HexColor("#F0F0F0")

font_regular = "Helvetica"
font_bold = "Helvetica-Bold"
font_italic = "Helvetica-Oblique"


def paragraph(pdf, text, x, y_top, width, style):
    item = Paragraph(text, style)
    _, height = item.wrap(width, PAGE_HEIGHT)
    item.drawOn(pdf, x, y_top - height)
    return y_top - height


pdf = canvas.Canvas(OUTPUT, pagesize=A4)
pdf.setTitle("Undangan Final dan Penutupan Pemuda Cup III")
pdf.setAuthor("Panitia Pemuda Cup III Sintong 2026")

margin = 19 * mm
content_width = PAGE_WIDTH - 2 * margin

# Header
header_y = PAGE_HEIGHT - 18 * mm
header_h = 39 * mm
pdf.setFillColor(white)
pdf.rect(margin, header_y - header_h, content_width, header_h, fill=1, stroke=0)
pdf.drawImage(LOGO, margin + 5 * mm, header_y - 33 * mm, 30 * mm, 30 * mm, preserveAspectRatio=True, mask="auto")

title_x = margin + 39 * mm
title_width = content_width - 44 * mm
pdf.setFillColor(INK)
pdf.setFont(font_bold, 8.5)
pdf.drawCentredString(title_x + title_width / 2, header_y - 8 * mm, "PANITIA PELAKSANA")
pdf.setFillColor(INK)
pdf.setFont(font_bold, 15)
pdf.drawCentredString(title_x + title_width / 2, header_y - 18 * mm, "TURNAMEN MINI SOCCER PEMUDA CUP III")
pdf.setFillColor(INK)
pdf.setFont(font_bold, 8.7)
pdf.drawCentredString(title_x + title_width / 2, header_y - 27 * mm, "KEPENGHULUAN SINTONG - 2026")
pdf.setStrokeColor(BLACK)
pdf.setLineWidth(1.4)
pdf.line(margin, header_y - header_h + 2.5 * mm, PAGE_WIDTH - margin, header_y - header_h + 2.5 * mm)
pdf.setLineWidth(0.45)
pdf.line(margin, header_y - header_h, PAGE_WIDTH - margin, header_y - header_h)

# Letter metadata
y = header_y - header_h - 10 * mm
pdf.setFillColor(INK)
pdf.setFont(font_bold, 10)
labels = [("Nomor", "003/PC-III/IX/2026"), ("Lampiran", "-"), ("Perihal", "Undangan Final dan Penutupan Turnamen")]
for index, (label, value) in enumerate(labels):
    row_y = y - index * 5.5 * mm
    pdf.setFillColor(INK)
    pdf.setFont(font_bold, 10)
    pdf.drawString(margin, row_y, label)
    pdf.drawString(margin + 25 * mm, row_y, ":")
    pdf.drawString(margin + 29 * mm, row_y, value)

y -= 23 * mm
pdf.setFillColor(INK)
pdf.setFont(font_regular, 10)
pdf.drawRightString(PAGE_WIDTH - margin, y, "Sintong, 15 September 2026")

y -= 15 * mm
pdf.setFont(font_bold, 10)
pdf.drawString(margin, y, "Kepada Yth.")
y -= 6 * mm
pdf.setFillColor(HexColor("#F2F2F2"))
pdf.roundRect(margin, y - 3 * mm, content_width, 8 * mm, 2 * mm, fill=1, stroke=0)
pdf.setFillColor(INK)
pdf.setFont(font_bold, 10)
pdf.drawString(margin + 3 * mm, y, "Bapak/Ibu/Saudara/i: .................................................................")
y -= 7 * mm
pdf.setFillColor(INK)
pdf.setFont(font_regular, 10)
pdf.drawString(margin, y, "di Tempat")

y -= 12 * mm
pdf.setFont(font_italic, 10)
pdf.drawString(margin, y, "Assalamu'alaikum warahmatullahi wabarakatuh,")

body_style = ParagraphStyle("body", fontName=font_regular, fontSize=10, leading=15, textColor=INK, alignment=TA_JUSTIFY)
y -= 10 * mm
y = paragraph(pdf, "Dengan hormat,<br/>Sehubungan dengan berakhirnya rangkaian Turnamen Mini Soccer Pemuda Cup III Sintong 2026, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pertandingan final sekaligus acara penutupan turnamen.", margin, y, content_width, body_style)

y -= 7 * mm
box_h = 30 * mm
box_x = margin + 16 * mm
box_w = content_width - 32 * mm
pdf.setFillColor(PALE)
pdf.roundRect(box_x, y - box_h, box_w, box_h, 3 * mm, fill=1, stroke=0)
details = [
    ("Hari/Tanggal", "Minggu, 20 September 2026"),
    ("Waktu", "16.00 WIB sampai selesai"),
    ("Tempat", "Lapangan Putri Hijau, Sintong"),
    ("Agenda", "Final dan Penutupan Pemuda Cup III"),
]
for index, (label, value) in enumerate(details):
    row_y = y - 7 * mm - index * 6 * mm
    pdf.setFillColor(INK)
    pdf.setFont(font_bold, 9.5)
    pdf.drawString(box_x + 7 * mm, row_y, label)
    pdf.setFont(font_regular, 9.5)
    pdf.drawString(box_x + 37 * mm, row_y, f":  {value}")
y -= box_h + 8 * mm

y = paragraph(pdf, "Kehadiran Bapak/Ibu/Saudara/i merupakan kehormatan dan dukungan besar bagi seluruh peserta serta panitia. Atas perhatian dan kehadirannya, kami mengucapkan terima kasih.", margin, y, content_width, body_style)
y -= 8 * mm
pdf.setFont(font_italic, 10)
pdf.drawString(margin, y, "Wassalamu'alaikum warahmatullahi wabarakatuh.")

# Signatures
y -= 12 * mm
pdf.setFillColor(BLACK)
pdf.roundRect(margin, y - 8 * mm, content_width, 8 * mm, 2 * mm, fill=1, stroke=0)
pdf.setFillColor(GOLD)
pdf.setFont(font_bold, 9)
pdf.drawCentredString(PAGE_WIDTH / 2, y - 5.2 * mm, "PANITIA PEMUDA CUP III SINTONG 2026")

sig_y = y - 17 * mm
left_center = margin + content_width * 0.27
right_center = margin + content_width * 0.73
pdf.setFillColor(INK)
pdf.setFont(font_bold, 9.5)
pdf.drawCentredString(left_center, sig_y, "Ketua Panitia")
pdf.drawCentredString(right_center, sig_y, "Sekretaris")

name_y = sig_y - 25 * mm
pdf.setLineWidth(0.7)
pdf.line(left_center - 24 * mm, name_y + 3 * mm, left_center + 24 * mm, name_y + 3 * mm)
pdf.line(right_center - 24 * mm, name_y + 3 * mm, right_center + 24 * mm, name_y + 3 * mm)
pdf.setFont(font_bold, 10.5)
pdf.drawCentredString(left_center, name_y, "EKHA BUYONG")
pdf.drawCentredString(right_center, name_y, "RIANTO NALDI")

# Footer
footer_y = 13 * mm
pdf.setFillColor(BLACK)
pdf.roundRect(margin, footer_y, content_width, 8 * mm, 2 * mm, fill=1, stroke=0)
pdf.setFillColor(white)
pdf.setFont(font_bold, 8)
pdf.drawCentredString(PAGE_WIDTH / 2, footer_y + 3 * mm, "Junjung tinggi sportivitas - Bersama membangun generasi muda Sintong")

pdf.save()
