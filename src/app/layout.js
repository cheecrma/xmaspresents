import "./globals.css?v=1.0.1"; // 캐시 방지용 버전 쿼리 추가

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
