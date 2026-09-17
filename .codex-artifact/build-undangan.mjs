import fs from 'node:fs/promises';
import path from 'node:path';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const root = '/Users/alexchandrahanif/project/sintong/lombalariramadhan';
const outputDir = path.join(root, 'outputs/undangan-final-pemuda-cup');
const logoPath = path.join(root, 'src/assets/pemuda-cup-logo-transparent.png');
const workbook = Workbook.create();
const sheet = workbook.worksheets.add('Surat Undangan');

sheet.showGridlines = false;
sheet.getRange('A1:H45').format.font = { name: 'Arial', size: 11, color: '#172033' };
sheet.getRange('A1:H45').format.verticalAlignment = 'center';
sheet.getRange('A1:A45').format.columnWidth = 12;
sheet.getRange('B1:B45').format.columnWidth = 13;
sheet.getRange('C1:C45').format.columnWidth = 13;
sheet.getRange('D1:D45').format.columnWidth = 13;
sheet.getRange('E1:E45').format.columnWidth = 13;
sheet.getRange('F1:F45').format.columnWidth = 13;
sheet.getRange('G1:G45').format.columnWidth = 13;
sheet.getRange('H1:H45').format.columnWidth = 4;

sheet.mergeCells('B2:G2');
sheet.getRange('B2').values = [['PANITIA PELAKSANA']];
sheet.getRange('B2:G2').format = { fill: '#151515', font: { name: 'Arial', size: 10, bold: true, color: '#FFB000' }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sheet.getRange('B2:G2').format.rowHeight = 21;

sheet.mergeCells('B3:G3');
sheet.getRange('B3').values = [['TURNAMEN MINI SOCCER PEMUDA CUP III']];
sheet.getRange('B3:G3').format = { fill: '#151515', font: { name: 'Arial', size: 16, bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sheet.getRange('B3:G3').format.rowHeight = 30;

sheet.mergeCells('B4:G4');
sheet.getRange('B4').values = [['SINTONG · KABUPATEN ROKAN HILIR · 2026']];
sheet.getRange('B4:G4').format = { fill: '#151515', font: { name: 'Arial', size: 9, bold: true, color: '#FF6A2A' }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sheet.getRange('B4:G4').format.rowHeight = 22;

const logo = await fs.readFile(logoPath);
sheet.images.add({ dataUrl: `data:image/png;base64,${logo.toString('base64')}`, anchor: { from: { row: 1, col: 0 }, extent: { widthPx: 78, heightPx: 78 } } });

sheet.mergeCells('B5:G5');
sheet.getRange('B5:G5').format = { fill: '#FF6A2A', bottomBorder: { style: 'thick', color: '#FFB000' } };
sheet.getRange('B5:G5').format.rowHeight = 7;

sheet.getRange('B7:C9').values = [
  ['Nomor', ': 001/PC-III/IX/2026'],
  ['Lampiran', ': -'],
  ['Perihal', ': Undangan Final dan Penutupan Turnamen'],
];
sheet.getRange('B7:B9').format.font = { name: 'Arial', size: 11, bold: true, color: '#172033' };
sheet.mergeCells('C7:G7');
sheet.mergeCells('C8:G8');
sheet.mergeCells('C9:G9');
sheet.getRange('B9:G9').format.font = { name: 'Arial', size: 11, bold: true, color: '#C94C18' };

sheet.mergeCells('E11:G11');
sheet.getRange('E11').values = [['Sintong, 15 September 2026']];
sheet.getRange('E11:G11').format.horizontalAlignment = 'right';

sheet.mergeCells('B13:G13');
sheet.getRange('B13').values = [['Kepada Yth.']];
sheet.getRange('B13:G13').format.font = { name: 'Arial', size: 11, bold: true, color: '#172033' };
sheet.mergeCells('B14:G14');
sheet.getRange('B14').values = [['Bapak/Ibu/Saudara/i: ........................................................']];
sheet.getRange('B14:G14').format = { fill: '#FFF3E8', font: { name: 'Arial', size: 11, bold: true, color: '#C94C18' }, bottomBorder: { style: 'thin', color: '#FFB000' } };
sheet.mergeCells('B15:G15');
sheet.getRange('B15').values = [['di Tempat']];

sheet.mergeCells('B17:G17');
sheet.getRange('B17').values = [['Assalamu’alaikum warahmatullahi wabarakatuh,']];
sheet.getRange('B17:G17').format.font = { name: 'Arial', size: 11, italic: true, color: '#172033' };

sheet.mergeCells('B19:G21');
sheet.getRange('B19').values = [['Dengan hormat,\nSehubungan dengan berakhirnya rangkaian Turnamen Mini Soccer Pemuda Cup III Sintong 2026, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pertandingan final sekaligus acara penutupan turnamen.']];
sheet.getRange('B19:G21').format = { wrapText: true, horizontalAlignment: 'justify', verticalAlignment: 'top', font: { name: 'Arial', size: 11, color: '#172033' } };
sheet.getRange('B19:G21').format.rowHeight = 25;

sheet.getRange('C23:D26').values = [
  ['Hari/Tanggal', ': Minggu, 20 September 2026'],
  ['Waktu', ': 16.00 WIB sampai selesai'],
  ['Tempat', ': Lapangan Putri Hijau, Sintong'],
  ['Agenda', ': Final dan Penutupan Pemuda Cup III'],
];
sheet.getRange('C23:C26').format.font = { name: 'Arial', size: 11, bold: true, color: '#172033' };
sheet.mergeCells('D23:F23');
sheet.mergeCells('D24:F24');
sheet.mergeCells('D25:F25');
sheet.mergeCells('D26:F26');
sheet.getRange('C23:F26').format.fill = '#F4F6F8';
sheet.getRange('C23:F26').format.rowHeight = 23;
sheet.getRange('C23:F26').format.leftBorder = { style: 'thin', color: '#D7DCE3' };

sheet.mergeCells('B28:G30');
sheet.getRange('B28').values = [['Kehadiran Bapak/Ibu/Saudara/i merupakan kehormatan dan dukungan besar bagi seluruh peserta serta panitia. Atas perhatian dan kehadirannya, kami mengucapkan terima kasih.']];
sheet.getRange('B28:G30').format = { wrapText: true, horizontalAlignment: 'justify', verticalAlignment: 'top', font: { name: 'Arial', size: 11, color: '#172033' } };

sheet.mergeCells('B32:G32');
sheet.getRange('B32').values = [['Wassalamu’alaikum warahmatullahi wabarakatuh.']];
sheet.getRange('B32:G32').format.font = { name: 'Arial', size: 11, italic: true, color: '#172033' };

sheet.mergeCells('B34:G34');
sheet.getRange('B34').values = [['PANITIA PEMUDA CUP III SINTONG 2026']];
sheet.getRange('B34:G34').format = { fill: '#151515', font: { name: 'Arial', size: 10, bold: true, color: '#FFB000' }, horizontalAlignment: 'center' };

sheet.mergeCells('B36:D36');
sheet.mergeCells('E36:G36');
sheet.getRange('B36').values = [['Ketua Panitia']];
sheet.getRange('E36').values = [['Sekretaris']];
sheet.getRange('B36:G36').format.horizontalAlignment = 'center';
sheet.getRange('B36:G36').format.font = { name: 'Arial', size: 10, bold: true, color: '#172033' };

sheet.mergeCells('B37:D40');
sheet.mergeCells('E37:G40');
sheet.getRange('B37:D40').format.rowHeight = 18;

sheet.mergeCells('B41:D41');
sheet.mergeCells('E41:G41');
sheet.getRange('B41').values = [['EKHA BUYONG']];
sheet.getRange('E41').values = [['RIANTO NALDI']];
sheet.getRange('B41:G41').format = { font: { name: 'Arial', size: 11, bold: true, color: '#172033' }, horizontalAlignment: 'center', topBorder: { style: 'thin', color: '#172033' } };

sheet.mergeCells('B43:G43');
sheet.getRange('B43').values = [['Junjung tinggi sportivitas · Bersama membangun generasi muda Sintong']];
sheet.getRange('B43:G43').format = { fill: '#FF6A2A', font: { name: 'Arial', size: 9, bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center' };
sheet.getRange('B43:G43').format.rowHeight = 22;

await workbook.recalculate();
const errors = await workbook.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!', options: { useRegex: true, maxResults: 100 }, summary: 'formula error scan' });
console.log(errors.ndjson);

await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({ sheetName: 'Surat Undangan', range: 'A1:H44', scale: 1.5 });
await fs.writeFile(path.join(outputDir, 'preview-undangan.png'), Buffer.from(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(path.join(outputDir, 'Undangan-Final-dan-Penutupan-Pemuda-Cup-III.xlsx'));
