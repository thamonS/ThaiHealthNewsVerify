// document.addEventListener('DOMContentLoaded', function() {
//     const verifyBtn = document.getElementById('verifyBtn');
//     const newsInput = document.getElementById('newsInput');
//     const resultArea = document.getElementById('resultArea');
//     const resStatus = document.getElementById('resStatus');
//     const resConf = document.getElementById('resConf');
//     const resReason = document.getElementById('resReason');
//     const resIcon = document.getElementById('resIcon');
//     const btnText = document.getElementById('btnText');
//     const btnLoader = document.getElementById('btnLoader');

//     verifyBtn.addEventListener('click', function() {
//         const text = newsInput.value.trim();

//         // 1. ตรวจสอบว่ามีข้อมูลไหม
//         if (!text) {
//             newsInput.classList.add('is-invalid');
//             newsInput.focus();
//             return;
//         } else {
//             newsInput.classList.remove('is-invalid');
//         }

//         // 2. แสดงสถานะกำลังโหลด
//         setLoadingState(true);

//         // 3. จำลองการประมวลผล (1.5 วินาที)
//         setTimeout(() => {
//             let data = {};
//             // สุ่มเลข Confidence ให้ดูสมจริงเหมือนที่เขียนใน Python
//             const randomConf = (Math.random() * (99.9 - 88.0) + 88.0).toFixed(1);

//             // Logic ตรวจสอบข่าว (เหมือนในไฟล์ .py เดิม)
//             if (text.includes("มะนาว") || text.includes("รักษาหายขาด") || text.includes("ยาวิเศษ")) {
//                 data = {
//                     result: "MISINFORMATION (ข้อมูลเท็จ/บิดเบือน)",
//                     confidence: `${randomConf}%`,
//                     reason: "ไม่พบงานวิจัยทางการแพทย์ที่รองรับ การอ้างสรรพคุณว่า 'หายขาด' ขัดแย้งกับข้อมูลสาธารณสุขปัจจุบัน",
//                     class: 'danger'
//                 };
//             } else {
//                 data = {
//                     result: "VERIFIED (ข้อมูลน่าเชื่อถือ)",
//                     confidence: `${randomConf}%`,
//                     reason: "ข้อมูลสอดคล้องกับบทความจากกรมการแพทย์ กระทรวงสาธารณสุข และงานวิจัยที่เกี่ยวข้อง",
//                     class: 'success'
//                 };
//             }

//             // 4. แสดงผลลัพธ์
//             setLoadingState(false);
//             showResult(data);
//         }, 1500); 
//     });

//     function setLoadingState(isLoading) {
//         if (isLoading) {
//             verifyBtn.disabled = true;
//             btnText.textContent = "กำลังวิเคราะห์ข้อมูล...";
//             btnLoader.style.display = "inline-block";
//             resultArea.style.display = "none";
//         } else {
//             verifyBtn.disabled = false;
//             btnText.textContent = "Verify News (ตรวจสอบ)";
//             btnLoader.style.display = "none";
//         }
//     }

//     function showResult(data) {
//         resultArea.style.display = "block";
//         resultArea.className = "card-footer p-4"; // reset class
        
//         if (data.class === 'danger') {
//             resultArea.classList.add('alert-danger-custom');
//             resIcon.className = "fas fa-3x fa-times-circle text-danger";
//         } else {
//             resultArea.classList.add('alert-success-custom');
//             resIcon.className = "fas fa-3x fa-check-circle text-success";
//         }

//         resStatus.textContent = data.result;
//         resConf.textContent = data.confidence;
//         resReason.textContent = data.reason;

//         // เลื่อนหน้าจอไปที่ผลลัพธ์แบบนุ่มนวล
//         resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//     }
// });




//-------------------------------------------------







// document.addEventListener('DOMContentLoaded', function() {
    
//     const verifyBtn = document.getElementById('verifyBtn');
//     const newsInput = document.getElementById('newsInput');
//     const resultArea = document.getElementById('resultArea');
    
//     // Elements inside Result Area
//     const resStatus = document.getElementById('resStatus');
//     const resConf = document.getElementById('resConf');
//     const resReason = document.getElementById('resReason');
//     const resIcon = document.getElementById('resIcon');

//     // Button Elements
//     const btnText = document.getElementById('btnText');
//     const btnLoader = document.getElementById('btnLoader');

//     verifyBtn.addEventListener('click', function() {
//         const text = newsInput.value.trim();

//         // 1. Validation
//         if (!text) {
//             newsInput.classList.add('is-invalid');
//             newsInput.focus();
//             return;
//         } else {
//             newsInput.classList.remove('is-invalid');
//         }

//         // 2. Set Loading State
//         setLoadingState(true);

//         // 3. Call API
//         fetch('/verify', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ text: text }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // 4. Update UI with Result
//             setLoadingState(false);
//             showResult(data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setLoadingState(false);
//             alert("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
//         });
//     });

//     // Function to handle Button State
//     function setLoadingState(isLoading) {
//         if (isLoading) {
//             verifyBtn.disabled = true;
//             btnText.textContent = "กำลังวิเคราะห์ข้อมูล...";
//             btnLoader.style.display = "inline-block";
//             resultArea.style.display = "none";
//         } else {
//             verifyBtn.disabled = false;
//             btnText.textContent = "Verify News (ตรวจสอบ)";
//             btnLoader.style.display = "none";
//         }
//     }

//     // Function to Render Result
//     function showResult(data) {
//         resultArea.style.display = "block";
        
//         // Reset classes
//         resultArea.className = "card-footer p-4 animate-fade-in";
        
//         if (data.class === 'danger') {
//             resultArea.classList.add('alert-danger-custom');
//             resIcon.className = "fas fa-times-circle text-danger";
//         } else {
//             resultArea.classList.add('alert-success-custom');
//             resIcon.className = "fas fa-check-circle text-success";
//         }

//         resStatus.textContent = data.result;
//         resConf.textContent = data.confidence;
//         resReason.textContent = data.reason;

//         // Smooth scroll to result
//         resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//     }

//     // Clear error on typing
//     newsInput.addEventListener('input', function() {
//         if (this.value.trim()) {
//             this.classList.remove('is-invalid');
//         }
//     });
// });


//-------------------------------------------------


// document.addEventListener('DOMContentLoaded', function() {
    
//     const verifyBtn = document.getElementById('verifyBtn');
//     const newsInput = document.getElementById('newsInput');
//     const resultArea = document.getElementById('resultArea');
    
//     // Elements inside Result Area
//     const resStatus = document.getElementById('resStatus');
//     const resConf = document.getElementById('resConf');
//     const resReason = document.getElementById('resReason');
//     const resIcon = document.getElementById('resIcon');

//     // Button Elements
//     const btnText = document.getElementById('btnText');
//     const btnLoader = document.getElementById('btnLoader');

//     verifyBtn.addEventListener('click', function() {
//         const text = newsInput.value.trim();

//         // 1. Validation
//         if (!text) {
//             newsInput.classList.add('is-invalid');
//             newsInput.focus();
//             return;
//         } else {
//             newsInput.classList.remove('is-invalid');
//         }

//         // 2. Set Loading State
//         setLoadingState(true);

//         // 3. Call API
//         fetch('/verify', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ text: text }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // 4. Update UI with Result
//             setLoadingState(false);
//             showResult(data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setLoadingState(false);
//             alert("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
//         });
//     });

//     // Function to handle Button State
//     function setLoadingState(isLoading) {
//         if (isLoading) {
//             verifyBtn.disabled = true;
//             btnText.textContent = "กำลังวิเคราะห์ข้อมูล...";
//             btnLoader.style.display = "inline-block";
//             resultArea.style.display = "none";
//         } else {
//             verifyBtn.disabled = false;
//             btnText.textContent = "Verify News (ตรวจสอบ)";
//             btnLoader.style.display = "none";
//         }
//     }

//     // Function to Render Result
//     function showResult(data) {
//         resultArea.style.display = "block";
        
//         // Reset classes
//         resultArea.className = "card-footer p-4 animate-fade-in";
        
//         if (data.class === 'danger') {
//             resultArea.classList.add('alert-danger-custom');
//             resIcon.className = "fas fa-times-circle text-danger";
//         } else {
//             resultArea.classList.add('alert-success-custom');
//             resIcon.className = "fas fa-check-circle text-success";
//         }

//         resStatus.textContent = data.result;
//         resConf.textContent = data.confidence;
//         resReason.textContent = data.reason;

//         // Smooth scroll to result
//         resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//     }

//     // Clear error on typing
//     newsInput.addEventListener('input', function() {
//         if (this.value.trim()) {
//             this.classList.remove('is-invalid');
//         }
//     });
// });


//-------------------------------------------------



// document.getElementById('verifyBtn').addEventListener('click', async () => {
//     const newsText = document.getElementById('newsInput').value;
//     if (!newsText) {
//         alert('กรุณากรอกข้อความข่าวที่ต้องการตรวจสอบ');
//         return;
//     }

//     const resultSection = document.getElementById('resultSection');
//     const loader = document.getElementById('loader');
//     const resultContent = document.getElementById('resultContent');
    
//     resultSection.classList.remove('hidden');
//     resultContent.classList.add('hidden');
//     // Simulate loading for prototype
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     // Mock Result based on keywords (Demo logic)
//     let status = 'จริง (Verified)';
//     let statusClass = 'status-true';
//     let analysis = "จากการตรวจสอบผ่านฐานข้อมูลสุขภาพและ RAG พบว่าข้อมูลนี้สอดคล้องกับแนวทางเวชปฏิบัติปัจจุบัน...";
    
//     if (newsText.includes('มะนาวรักษามะเร็ง') || newsText.includes('รักษาโรค')) {
//         status = 'ข้อมูลเท็จ (Fake News)';
//         statusClass = 'status-false';
//         analysis = "คำกล่าวอ้างที่ว่าการดื่มน้ำมะนาวสามารถรักษามะเร็งได้นั้นไม่มีหลักฐานทางการแพทย์รองรับ และอาจทำให้ผู้ป่วยเสียโอกาสในการรักษาที่ถูกต้อง...";
//     }

//     document.getElementById('verificationStatus').textContent = status;
//     document.getElementById('verificationStatus').className = `status-badge ${statusClass}`;
//     document.getElementById('aiAnalysis').textContent = analysis;
    
//     const sourceList = document.getElementById('sourceList');
//     sourceList.innerHTML = '<li>สถาบันมะเร็งแห่งชาติ (National Cancer Institute)</li><li>กรมการแพทย์ กระทรวงสาธารณสุข</li>';
    
//     resultContent.classList.remove('hidden');
// });


//-------------------------------------------------

document.getElementById('verifyBtn').addEventListener('click', async () => {
    const newsInput = document.getElementById('newsInput');
    const newsText = newsInput.value.trim();
    
    if (!newsText) {
        alert('กรุณากรอกข้อความข่าวที่ต้องการตรวจสอบ');
        return;
    }

    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    const loader = document.getElementById('loader');
    
    // UI State: Show loading
    resultSection.classList.remove('hidden');
    resultContent.classList.add('hidden');
    loader.classList.remove('hidden');

    try {
        const response = await fetch('http://127.0.0.1:5000/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newsText })
        });

        const data = await response.json();

        // Update UI with real data from Python
        document.getElementById('verificationStatus').textContent = data.status;
        document.getElementById('verificationStatus').className = `status-badge ${data.status_class}`;
        document.getElementById('aiAnalysis').textContent = data.analysis;
        
        const sourceList = document.getElementById('sourceList');
        sourceList.innerHTML = data.sources.map(s => `<li>${s}</li>`).join('');

    } catch (error) {
        console.error("Error connecting to backend:", error);
        alert("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้ กรุณาตรวจสอบว่า app.py รันอยู่");
    } finally {
        loader.classList.add('hidden');
        resultContent.classList.remove('hidden');
    }
});

