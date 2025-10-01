import React from "react";

export default function NosotrosPage() {
	return (
		<main className="min-h-screen bg-white overflow-hidden">
			{/* Encabezado */}
			<section className="relative h-64 flex items-center justify-center bg-purple-700 overflow-hidden">
				<img src="/encabezado.png" alt="Grupo NOVA" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
				<h1 className="relative text-6xl md:text-8xl font-extrabold text-white z-10 drop-shadow-lg hover:scale-105 transition-transform duration-300">Nosotros</h1>
			</section>

					{/* Sección de tarjetas */}
					<section className="max-w-5xl mx-auto flex flex-col gap-10 py-12 px-4 md:px-0">

						{/* Tarjeta quienes somos*/}
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
								<img src="/quienes-somos.png" alt="Grupo NOVA" className="rounded-2xl object-cover w-full h-40 md:h-44"/>
							</div>
							<div className="bg-[#B25FAF33] rounded-2xl shadow-lg p-5 w-full md:w-2/3 flex flex-col justify-center">
								<h2 className="text-2xl font-bold text-black mb-2">¿Quiénes somos?</h2>
								<p className="text-black/80 text-base text-left">
									Somos un grupo estudiantil de la Universidad EAFIT, que busca impulsar la tecnología y la innovación que inspira y empodera a sus miembros para transformar el entorno y forjar el futuro, siendo parte de la era tecnológica y la Cuarta Revolución Industrial. Todo esto dentro de la integridad, pluralismo y la inclusión.
								</p>
							</div>
                        </div>

						{/* Tarjeta Nuestra historia */}
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
							<div className="bg-[#B25FAF33] rounded-2xl shadow-lg p-5 w-full md:w-2/3 flex flex-col justify-center">
								<h2 className="text-2xl font-bold text-black mb-2">Nuestra historia</h2>
								<p className="text-black/80 text-base text-left">
									El grupo se creó en el año 2022 con 27 miembros fundadores. Todos con el objetivo de crear un espacio inclusivo en el que todos los estudiantes puedan formar parte de la transformación tecnológica. Donde se valore el desarrollo de habilidades y conocimientos como elementos claves para impactar y transformar nuestro entorno.
								</p>
							</div>
                            <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
								<img src="/nuestra-historia.png" alt="Historia NOVA" className="rounded-2xl object-cover w-full h-40 md:h-44"/>
							</div>
						</div>
					</section>
		</main>
	);
}