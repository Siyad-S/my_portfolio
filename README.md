# 🌐 Immersive 3D Portfolio

> **"Bridging the gap between Design & Engineering."**

A high-performance, interactive portfolio website built with the latest web technologies. It features immersive 3D elements, butter-smooth scrolling, fluid animations, and premium animations to showcase creative development skills.

## 🌌 The "Digital Void" Aesthetic

This portfolio is designed around the **"Digital Void"** concept—a minimalist yet depth-filled design focused on negative space, neon accents, and fluid motion. It emphasizes:
- **Glassmorphism**: Translucent layers blurring the background.
- **Cyber-Minimalism**: Clean typography mixed with futuristic elements.
- **Interactive Depth**: 3D objects that respond to user interaction, creating a sense of a living environment.

---

## ✨ Key Features

*   **🧬 3D Interactive Hero**: A mesmerizing DNA/Helix particle effect (`HeroParticles`) that reacts to mouse movement.
*   **🌍 Connectivity Globe**: An interactive 3D globe (`ContactGlobe`) representing global reach.
*   **🖱️ Smooth Experience**: Powered by `Lenis` for premium, inertia-based scrolling.
*   **🎨 Dynamic UI**: Fluid animations with GSAP and Framer Motion.
*   **📱 Fully Responsive**: Optimized layouts for all devices using Tailwind CSS v4.
*   **📧 Working Contact Form**: Integrated with EmailJS and Zod validation.
*   **⚡ Centralized Data**: All content (projects, skills, socials) managed via `src/lib/data.ts` for easy updates.

---

## 🛠️ Tech Stack

**Core:**
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

**Animation & 3D:**
*   **3D Engine**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
*   **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
*   **Scrolling**: [Lenis](https://lenis.studio/)

**Utilities:**
*   **Forms**: React Hook Form + Zod (Validation)
*   **Email**: EmailJS
*   **Icons**: Lucide React + Simple Icons

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory to enable the contact form:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
*(You can get these keys for free from [EmailJS](https://www.emailjs.com/))*

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚙️ Configuration

### Updating Content
You don't need to dig into components to change content. Navigate to `src/lib/data.ts` to update:
- **Projects**: Add/Edit project details, tech stacks, and images.
- **Skills**: Update your skill set and icons.
- **Socials**: Change your social media links.
- **About Me**: Update your bio and profile image.

---

## 📂 Project Structure

```
src/
├── app/                  # App Router pages and layouts
├── components/
│   ├── canvas/           # 3D scenes (HeroParticles, Globe)
│   └── ui/               # Reusable UI components (Buttons, Cards)
├── lib/                  # Utilities and data.ts
└── styles/               # Global styles and Tailwind config
```

---

## 🤖 Development Philosophy

This project explicitly embraces **Human-AI Collaboration**. 
By leveraging advanced AI tools for pair programming, this portfolio demonstrates a modern workflow that prioritizes:
- **Efficiency**: Rapid prototyping of complex 3D scenes.
- **Code Quality**: Enhanced type safety and architectural patterns.
- **Innovation**: Focusing human creativity on design and logic while accelerating implementation.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Based on the **"Digital Void"** aesthetic. Built with 💙 by **Siyad S.**
