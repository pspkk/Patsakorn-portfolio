# Patsakorn — Portfolio

เว็บหน้าเดียว HTML/CSS/JavaScript ไม่มี dependency หรือขั้นตอน build รองรับ GitHub Pages ทั้ง repository หลักและ project repository เพราะใช้ relative paths

## แก้เนื้อหา

- `index.html`: ชื่อ, Summary, โปรเจกต์, เครื่องมือ, อีเมล, LinkedIn และวันฝึกงาน
- `styles.css`: สี ฟอนต์ และรูปแบบมือถือ
- `script.js`: เปิดรายละเอียดโปรเจกต์เมื่อกดลิงก์และอัปเดตปี footer
- `assets/patsakorn-cv.pdf`: สำเนา CV ล่าสุดที่ผู้ใช้ส่งมา เปลี่ยนไฟล์นี้เมื่อแก้ CV
- `assets/accident-dashboard.jpg`: ภาพจาก PDF dashboard ฉบับรายวิชาเดิม ไม่ใช่ผลวิเคราะห์ฉบับขยายปีล่าสุด
- `assets/urban-feature.jpg`: หน้าปกงานสารคดี ไม่ได้นำ PDF ฉบับเต็มที่ยังมีตัวเลขต้องตรวจมาเผยแพร่

## ก่อนเผยแพร่

- ตรวจวันและเครื่องมือโปรเจกต์อุบัติเหตุใน CV ให้ตรงกัน (CV ปัจจุบันยังระบุปี 2025 พร้อม Pandas)
- Dashboard ที่แสดงเป็น original academic version มีตัวเลขและนิยามต้องทบทวน ควรเปลี่ยนเป็นรูปฉบับตรวจแล้วเมื่อพร้อม เนื้อหาเว็บระบุสถานะ Being refined และข้อจำกัดไว้แล้ว
- ตรวจว่า Power BI เป็นเครื่องมือที่ใช้ในโปรเจกต์ Thesis จริงตาม CV ล่าสุด
- ตรวจลิงก์ EduForward และ LinkedIn ด้วยเบราว์เซอร์
- อีเมลเป็นข้อมูลสาธารณะบนเว็บ ส่วน CV มีหมายเลขโทรศัพท์และย่านที่อยู่ตามไฟล์ที่คุณให้มา ตรวจว่าต้องการเผยแพร่ก่อนนำขึ้น GitHub
- ยังไม่ได้ยืนยันบทบาทที่เปลี่ยนจากงานกลุ่มเป็นงานเดี่ยวเพิ่มเติม จึงใช้ Contributed to ใน EduForward
- ไม่มีฟอร์มเก็บข้อมูล ไม่มี analytics และไม่มี GitHub URL สมมติ

## นำขึ้น GitHub Pages

1. สร้าง repository สำหรับ Portfolio โดยเฉพาะ
2. อัปโหลด **ไฟล์ข้างในโฟลเดอร์นี้** ไปไว้ระดับบนสุดของ repository (`index.html`, `styles.css`, `script.js`, `.nojekyll`, `assets/` และ README) ไม่ใช่อัปโหลดทั้ง workspace ซึ่งมีข้อมูลอื่น
3. เปิด Settings → Pages → Deploy from a branch → เลือก branch ที่อัปโหลด (เช่น main) และโฟลเดอร์ / (root) → Save
4. รอให้ deployment สำเร็จ แล้วใช้ URL ที่ GitHub แสดง ทดสอบบนมือถือและเปิด CV/ภาพ/ลิงก์ผลงาน

คู่มือทางการ: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

ยังไม่ได้สร้าง repository หรือเผยแพร่เว็บแทนคุณ

## Live Thesis Dashboard และ Canva
- ฝัง URL Power BI สาธารณะที่ตรวจจาก iframe ของ https://www.childrenlitswu.com/dashboard/ โดยตรง พร้อมลิงก์ต้นทางและปุ่มเปิดรายงานแยก ไม่มีการคัดลอกฐานข้อมูล
- การแสดงผลขึ้นอยู่กับบริการและสิทธิ์เผยแพร่ของเจ้าของรายงาน
- ปุ่มงานสารคดีเชื่อม https://canva.link/8oh652t1zyog7kq ตามที่ผู้ใช้ระบุ ลิงก์นี้เปิดหน้า Canva editor ตอนตรวจ ควรเปลี่ยนเป็นลิงก์ view-only ก่อนเผยแพร่ Portfolio ไม่มีการเปลี่ยนสิทธิ์หรือแก้ไข Canva โดยผู้ช่วย

## Certificates
เพิ่มใบรับรองหลักสูตร IBM Data Analysis with Python (10 Nov 2025) และ University of Michigan Building Web Applications in PHP (4 May 2025) พร้อมไฟล์ภาพต้นฉบับและลิงก์ verify ตามใบรับรอง กดภาพเพื่อเปิดขนาดเต็ม เปลี่ยนข้อความและ URL ได้ใน section certificates ของ index.html
