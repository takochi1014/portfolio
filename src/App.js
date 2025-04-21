import React from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>田中太郎</h1>
        <nav>
          <a href="#about">自己紹介</a>
          <a href="#portfolio">ポートフォリオ</a>
          <a href="#skills">スキル</a>
          <a href="#contact">コンタクト</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>自己紹介</h2>
          <div>
            <Logo className="logo" />
          </div>
          <p>
            ソフトウェアエンジニアの田中太郎です。
            React、Node.js、Pythonなどを得意としています。
          </p>
        </section>
        <section id="portfolio">
          <h2>ポートフォリオ</h2>
          <div className="portfolio-item">
            <h3>ウェブサイト作成</h3>
            <p>Reactを使用したウェブサイト作成プロジェクトです。</p>
            <a href="https://example.com/website">リンク</a>
          </div>
          <div className="portfolio-item">
            <h3>モバイルアプリ開発</h3>
            <p>React Nativeを使用したモバイルアプリ開発プロジェクトです。</p>
            <a href="https://example.com/mobileapp">リンク</a>
          </div>
        </section>
        <section id="skills">
          <h2>スキル</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>
        <section id="contact">
          <h2>コンタクト</h2>
          <p>tanaka.taro@example.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 田中太郎</p>
      </footer>
    </div>
  );
}

export default App;
