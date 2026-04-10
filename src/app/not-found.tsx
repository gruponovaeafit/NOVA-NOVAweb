"use client";

const styles = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .error-page {
    background: #120027;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-page__wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .error-page__img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
  }

  .error-page__btn {
    position: absolute;
    top: 75%;        /* ← sube o baja el botón */
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.7rem 2.5rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    min-width: 140px;
    background: #ffffff;
    color: #7c3aed;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    transition: transform 0.1s, box-shadow 0.2s;
  }

  .error-page__btn:hover {
    background: #7c3aed;
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
    transform: translate(-50%, -50%) scale(1.02);
  }
`;

export default function ErrorPage() {
  return (
    <>

      <html>
        <body>
          
          <style>{styles}</style>
          <section className="error-page">
            <div className="error-page__wrapper">

              <img
                src="/mensaje-error.svg"
                alt="Error"
                className="error-page__img"
                />

              <button
                className="error-page__btn"
                onClick={() => window.location.href = "/"}
                >
                Volver al inicio
              </button>

            </div>
          </section>
        </body>
      </html>
    </>
  );
}