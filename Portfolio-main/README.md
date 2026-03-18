# KK — Karthik Kunduru Portfolio

A personal portfolio website built with HTML, CSS, and JavaScript, featuring a Python Flask backend for the contact form email functionality.

---

## Live Sections

- **Hero** — Introduction with name, bio, and resume button
- **About** — Personal summary with animated stats counter
- **Services** — Video Editing, Web Development, Analytics, AI/ML
- **Recent Work** — 4-frame photo gallery from hackathons and college events
- **Certifications** — IBM, Microsoft, Python, Cisco certificates with logos
- **Projects** — Smart Helmet Detection, Student Opportunity Tracker, Python Automation
- **Contact** — Working contact form that sends email directly to Gmail
- **Resume Page** — Dedicated page with PDF viewer and download button

---

## Project Structure

```
Portfolio-main/
├── index.html          # Main portfolio page
├── about.html          # About page
├── resume.html         # Resume viewer page
├── style.css           # Main stylesheet
├── about.css           # About page styles
├── script.js           # Main JavaScript (animations, contact form)
├── about.js            # About page JavaScript
├── mail_server.py      # Python Flask email backend
├── requirements.txt    # Python dependencies
└── assests/
    ├── me.png              # Profile photo
    ├── Karthik_Resume.pdf  # Resume PDF
    ├── IBM.png             # IBM certificate logo
    ├── microsoft.png       # Microsoft certificate logo
    ├── python.png          # Python certificate logo
    ├── cisco.png           # Cisco certificate logo
    └── ...                 # Project and event photos
```

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML5, CSS3, JavaScript (Vanilla) |
| Fonts      | Google Fonts (Bebas Neue, Poppins)|
| Icons      | Font Awesome 6.5                  |
| Backend    | Python, Flask, Flask-CORS         |
| Email      | Gmail SMTP (smtplib)              |

---

## Features

- Animated loader with particle canvas
- Smooth slide-up portfolio reveal animation
- Custom gold cursor with ring follow effect
- Scroll reveal animations on all sections
- Animated stats counter
- Hover effects on service cards, project cards, certifications
- 4-frame recent work gallery with individual photo alignment
- Working contact form → sends email to Gmail inbox
- Resume page with embedded PDF viewer + download button
- Fully responsive for mobile and tablet

---

## Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/kundurukarthik15-gif/Karthik-Portfolio-Website.git
cd Portfolio-main
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Gmail App Password

Open `mail_server.py` and fill in your credentials:

```python
GMAIL_USER = "karthikkunduru27@gmail.com"
GMAIL_PASS = "your_16_char_app_password"
TO_EMAIL   = "karthikkunduru27@gmail.com"
```

> To get a Gmail App Password:
> 1. Go to [myaccount.google.com](https://myaccount.google.com)
> 2. Security → 2-Step Verification → Turn ON
> 3. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
> 4. Select **Mail** → **Other** → type `Portfolio` → Generate
> 5. Copy the 16-character password and paste it above

### 4. Run the Python mail server

```bash
python mail_server.py
```

Server runs at `http://localhost:5000`

### 5. Open the portfolio

Open `index.html` in your browser. The contact form will send emails via the running Python server.

---

## Contact Form Flow

```
User fills form → script.js → POST http://localhost:5000/send
→ mail_server.py → Gmail SMTP → karthikkunduru27@gmail.com
```

---

## Certifications Showcased

| Certificate                     | Issuer                  |
|---------------------------------|-------------------------|
| AI Fundamentals                 | IBM SkillsBuild         |
| Power BI Data Modelling Basics  | Simplilearn SkillUp     |
| Python Programming              | MindLuster              |
| C Essentials                    | Cisco Networking Academy|

---

## Projects Showcased

| Project                          | Tech Stack                              |
|----------------------------------|-----------------------------------------|
| Smart Helmet Detection System    | Python, IoT, Arduino                    |
| Student Opportunity Tracker      | Python, MongoDB, Selenium, BeautifulSoup|
| 7+ Python Automation Projects    | Python, NumPy, Pandas, API              |

---

## Connect

- LinkedIn: [karthik-kunduru-517836332](https://www.linkedin.com/in/karthik-kunduru-517836332)
- GitHub: [kundurukarthik15-gif](https://github.com/kundurukarthik15-gif)
- Email: karthikkunduru27@gmail.com
- CodeChef: [karthi15115](https://www.codechef.com/users/karthi15115)
- LeetCode: [Karthik15115](https://leetcode.com/u/Karthik15115/)

---

## License

This project is personal portfolio work by **Karthik Kunduru**. Feel free to use it as inspiration but please do not copy it directly.
