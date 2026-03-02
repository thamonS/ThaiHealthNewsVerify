# from flask import Flask, render_template, request, jsonify
# import time
# import random

# app = Flask(__name__)

# # Route สำหรับหน้าแรก
# @app.route('/')
# def home():
#     return render_template('index.html')

# # Route จำลองการตรวจสอบข่าว (Mockup API)
# @app.route('/verify', methods=['POST'])
# def verify_news():
#     data = request.json
#     news_text = data.get('text', '')
    
#     # Simulate processing time (ให้ดูสมจริงว่า AI กำลังคิด)
#     time.sleep(1.5) 
    
#     # Logic ตัวอย่าง (Mockup)
#     # ในการใช้งานจริง จุดนี้คือที่เรียกใช้งาน LLM / RAG Model
#     if "มะนาว" in news_text or "รักษาหายขาด" in news_text or "ยาวิเศษ" in news_text:
#         result = "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)"
#         confidence = f"{random.uniform(95.0, 99.9):.1f}%" # สุ่มเลขให้ดูไม่แข็ง
#         reason = "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน"
#         alert_class = "danger" # สีแดง
#         icon = "times-circle"
#     else:
#         result = "VERIFIED (ข้อมูลน่าเชื่อถือ)"
#         confidence = f"{random.uniform(88.0, 96.0):.1f}%"
#         reason = "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง"
#         alert_class = "success" # สีเขียว
#         icon = "check-circle"

#     return jsonify({
#         'result': result,
#         'confidence': confidence,
#         'reason': reason,
#         'class': alert_class,
#         'icon': icon
#     })

# if __name__ == '__main__':
#     app.run(debug=True)




# from flask import Flask, render_template, request, jsonify
# import time
# import random

# app = Flask(__name__)

# # Route สำหรับหน้าแรก
# @app.route('/')
# def home():
#     return render_template('index.html')

# # Route จำลองการตรวจสอบข่าว (Mockup API)
# @app.route('/verify', methods=['POST'])
# def verify_news():
#     data = request.json
#     news_text = data.get('text', '')
    
#     # Simulate processing time (ให้ดูสมจริงว่า AI กำลังคิด)
#     time.sleep(1.5) 
    
#     # Logic ตัวอย่าง (Mockup)
#     # ในการใช้งานจริง จุดนี้คือที่เรียกใช้งาน LLM / RAG Model
#     if "มะนาว" in news_text or "รักษาหายขาด" in news_text or "ยาวิเศษ" in news_text:
#         result = "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)"
#         confidence = f"{random.uniform(95.0, 99.9):.1f}%" # สุ่มเลขให้ดูไม่แข็ง
#         reason = "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน"
#         alert_class = "danger" # สีแดง
#         icon = "times-circle"
#     else:
#         result = "VERIFIED (ข้อมูลน่าเชื่อถือ)"
#         confidence = f"{random.uniform(88.0, 96.0):.1f}%"
#         reason = "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง"
#         alert_class = "success" # สีเขียว
#         icon = "check-circle"

#     return jsonify({
#         'result': result,
#         'confidence': confidence,
#         'reason': reason,
#         'class': alert_class,
#         'icon': icon
#     })

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, render_template, request, jsonify
# import time
# import random

# app = Flask(__name__)

# # Route สำหรับหน้าแรก
# @app.route('/')
# def home():
#     return render_template('index.html')

# # Route จำลองการตรวจสอบข่าว (Mockup API)
# @app.route('/verify', methods=['POST'])
# def verify_news():
#     data = request.json
#     news_text = data.get('text', '')
    
#     # Simulate processing time (ให้ดูสมจริงว่า AI กำลังคิด)
#     time.sleep(1.5) 
    
#     # Logic ตัวอย่าง (Mockup)
#     # ในการใช้งานจริง จุดนี้คือที่เรียกใช้งาน LLM / RAG Model
#     if "มะนาว" in news_text or "รักษาหายขาด" in news_text or "ยาวิเศษ" in news_text:
#         result = "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)"
#         confidence = f"{random.uniform(95.0, 99.9):.1f}%" # สุ่มเลขให้ดูไม่แข็ง
#         reason = "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน"
#         alert_class = "danger" # สีแดง
#         icon = "times-circle"
#     else:
#         result = "VERIFIED (ข้อมูลน่าเชื่อถือ)"
#         confidence = f"{random.uniform(88.0, 96.0):.1f}%"
#         reason = "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง"
#         alert_class = "success" # สีเขียว
#         icon = "check-circle"

#     return jsonify({
#         'result': result,
#         'confidence': confidence,
#         'reason': reason,
#         'class': alert_class,
#         'icon': icon
#     })

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, render_template, request, jsonify
# import time
# import random

# app = Flask(__name__)

# # Route สำหรับหน้าแรก
# @app.route('/')
# def home():
#     return render_template('index.html')

# # Route จำลองการตรวจสอบข่าว (Mockup API)
# @app.route('/verify', methods=['POST'])
# def verify_news():
#     data = request.json
#     news_text = data.get('text', '')
    
#     # Simulate processing time (ให้ดูสมจริงว่า AI กำลังคิด)
#     time.sleep(1.5) 
    
#     # Logic ตัวอย่าง (Mockup)
#     # ในการใช้งานจริง จุดนี้คือที่เรียกใช้งาน LLM / RAG Model
#     if "มะนาว" in news_text or "รักษาหายขาด" in news_text or "ยาวิเศษ" in news_text:
#         result = "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)"
#         confidence = f"{random.uniform(95.0, 99.9):.1f}%" # สุ่มเลขให้ดูไม่แข็ง
#         reason = "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน"
#         alert_class = "danger" # สีแดง
#         icon = "times-circle"
#     else:
#         result = "VERIFIED (ข้อมูลน่าเชื่อถือ)"
#         confidence = f"{random.uniform(88.0, 96.0):.1f}%"
#         reason = "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง"
#         alert_class = "success" # สีเขียว
#         icon = "check-circle"

#     return jsonify({
#         'result': result,
#         'confidence': confidence,
#         'reason': reason,
#         'class': alert_class,
#         'icon': icon
#     })

# if __name__ == '__main__':
#     app.run(debug=True)


#-----------------------------------------------------------------------


# # ระบบตรวจสอบข่าวสารสุขภาพอัตโนมัติในภาษาไทย
# # Prototype Server using Python (Note: This file is provided as requested, but needs a backend environment to run)

# import json
# # In a real app, you would import LangChain, OpenAI, etc.
# # from langchain.llms import OpenAI

# def verify_news(text):
#     """
#     Mock function for health news verification using LLM + RAG logic
#     """
#     print(f"Processing news: {text[:50]}...")
    
#     # Mock RAG Retrieval
#     context = "ผลการวิจัยทางการแพทย์ระบุว่า..."
    
#     # Mock LLM Response
#     response = {
#         "status": "Inconclusive",
#         "confidence": 0.85,
#         "analysis": "ระบบกำลังประมวลผลข้อมูลภาษาไทยด้วย RAG...",
#         "sources": ["กระทรวงสาธารณสุข", "WHO Thailand"]
#     }
#     return response

# if __name__ == "__main__":
#     test_news = "น้ำมะนาวช่วยรักษาโรคมะเร็งได้จริงหรือไม่?"
#     result = verify_news(test_news)
#     print(json.dumps(result, indent=2, ensure_ascii=False))


#------------------------------------------------------------------------------------

from flask import Flask, request, jsonify, render_template # เพิ่ม render_template
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

# --- ส่วนที่เพิ่มเข้ามาใหม่ ---
@app.route('/')
def home():
    # Flask จะไปหาไฟล์นี้ในโฟลเดอร์ templates อัตโนมัติ
    return render_template('index.html')
# -------------------------

def perform_rag_verification(text):
    # (โค้ด logic เดิมของคุณ...)
    if "มะนาว" in text and "มะเร็ง" in text:
        return {
            "status": "ข้อมูลเท็จ (Fake News)",
            "status_class": "status-false",
            "analysis": "สถาบันมะเร็งแห่งชาติยืนยันว่าไม่มีงานวิจัยรองรับว่าน้ำมะนาวรักษามะเร็งได้...",
            "sources": ["สถาบันมะเร็งแห่งชาติ", "กรมการแพทย์ กระทรวงสาธารณสุข"]
        }
    return {
        "status": "จริง (Verified)",
        "status_class": "status-true",
        "analysis": "ข้อมูลเบื้องต้นมีความสอดคล้องกับข้อเท็จจริงทางการแพทย์...",
        "sources": ["กระทรวงสาธารณสุข", "WHO Thailand"]
    }

@app.route('/verify', methods=['POST'])
def verify():
    data = request.json
    news_text = data.get("text", "")
    time.sleep(1.5) 
    result = perform_rag_verification(news_text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5000)