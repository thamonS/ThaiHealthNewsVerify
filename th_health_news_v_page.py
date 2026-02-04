from flask import Flask, render_template, request, jsonify
import time
import random

app = Flask(__name__)

# Route สำหรับหน้าแรก
@app.route('/')
def home():
    return render_template('index_page.html')

# Route จำลองการตรวจสอบข่าว (Mockup API)
@app.route('/verify', methods=['POST'])
def verify_news():
    data = request.json
    news_text = data.get('text', '')
    
    # Simulate processing time (ให้ดูสมจริงว่า AI กำลังคิด)
    time.sleep(1.5) 
    
    # Logic ตัวอย่าง (Mockup)
    # ในการใช้งานจริง จุดนี้คือที่เรียกใช้งาน LLM / RAG Model
    if "มะนาว" in news_text or "รักษาหายขาด" in news_text or "ยาวิเศษ" in news_text:
        result = "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)"
        confidence = f"{random.uniform(95.0, 99.9):.1f}%" # สุ่มเลขให้ดูไม่แข็ง
        reason = "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน"
        alert_class = "danger" # สีแดง
        icon = "times-circle"
    else:
        result = "VERIFIED (ข้อมูลน่าเชื่อถือ)"
        confidence = f"{random.uniform(88.0, 96.0):.1f}%"
        reason = "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง"
        alert_class = "success" # สีเขียว
        icon = "check-circle"

    return jsonify({
        'result': result,
        'confidence': confidence,
        'reason': reason,
        'class': alert_class,
        'icon': icon
    })

if __name__ == '__main__':
    app.run(debug=True)