// src/app/layout.js

import "./globals.css"; // 글로벌 CSS 파일 불러오기

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
