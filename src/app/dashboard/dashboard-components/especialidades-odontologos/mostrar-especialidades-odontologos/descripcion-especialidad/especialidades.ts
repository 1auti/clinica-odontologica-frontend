import { Especialidad } from "./especialidad";
import { DomSanitizer } from '@angular/platform-browser';



export const especialidades: Especialidad[] = [
  new Especialidad(
    1,
    'Cirugía Dental',
    'La cirugía dental es una especialidad que se centra en procedimientos quirúrgicos realizados en la cavidad bucal. Los cirujanos dentales están capacitados para llevar a cabo una variedad de intervenciones que abordan problemas orales y maxilofaciales.',
    'Extracción de dientes, Inserción de implantes dentales, Cirugía ortognática para corrección de maloclusiones',
    'La cirugía dental desempeña un papel crucial en el tratamiento de afecciones orales complejas. Permite abordar problemas que no pueden tratarse mediante procedimientos no quirúrgicos, mejorando la salud bucal y la calidad de vida del paciente.',
    '../../../../../../assets/images/especialidades/cirugia dental.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/7xNsrcRJxs8'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    2,
    'Ortodoncia General',
    'La ortodoncia general se enfoca en la corrección de mal posiciones dentales y la alineación dental. Los ortodoncistas utilizan diversos dispositivos y técnicas para lograr una mordida y una sonrisa saludables.',
    'Brackets, Invisalign, Retenedores',
    'La ortodoncia general es fundamental para corregir problemas de alineación dental, mejorar la funcionalidad y la estética de la sonrisa. Contribuye a una buena salud bucal a largo plazo.',
    '../../../../../../assets/images/especialidades/Ortodoncia General.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/MeRWcZciLdU'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    3,
    'Odontopediatra',
    'La odontopediatría se especializa en brindar atención dental a niños y adolescentes. Los odontopediatras están entrenados para abordar las necesidades dentales específicas de esta población, incluido el manejo de la ansiedad dental en los niños.',
    'Exámenes dentales, Selladores dentales, Tratamiento de caries en dientes temporales',
    'La odontopediatría es crucial para establecer buenos hábitos de cuidado bucal desde una edad temprana y garantizar la salud dental a lo largo de la vida.',
    '../../../../../../assets/images/especialidades/Odontopediatra.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/0BMK4mbbbn0'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    4,
    'Endodoncia',
    'La endodoncia se centra en el tratamiento de enfermedades de la pulpa dental, que es la parte interna del diente. Los endodoncistas realizan tratamientos de conducto para salvar dientes afectados por caries extensas o lesiones.',
    'Tratamiento de conducto, Retratamiento de conducto, Apicectomía',
    'La endodoncia es esencial para preservar dientes que de otro modo se perderían. Permite conservar la estructura dental natural y restaurar la funcionalidad.',
    '../../../../../../assets/images/especialidades/Endodoncia.png',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/qJLusiDaNzs'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    5,
    'Prostodoncia',
    'La prostodoncia se especializa en la restauración y reemplazo de dientes ausentes o dañados. Los prostodoncistas utilizan prótesis dentales, como dentaduras y puentes, para mejorar la función y la estética.',
    'Dentaduras completas, Dentaduras parciales, Puentes dentales',
    'La prostodoncia desempeña un papel crucial en la mejora de la estética facial y la capacidad de masticación. Contribuye a la calidad de vida de quienes han perdido dientes.',
    '../../../../../../assets/images/especialidades/Prostodoncia.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/QVjvim4KhgM'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    6,
    'Patólogo Oral',
    'El patólogo oral es un especialista en el estudio de enfermedades orales y maxilofaciales. Analizan muestras de tejido para diagnosticar condiciones como lesiones cancerosas, infecciones y trastornos.',
    'Biopsias orales, Diagnóstico de lesiones orales, Evaluación de tejidos bucales',
    'El patólogo oral juega un papel fundamental en el diagnóstico temprano y preciso de enfermedades orales. Contribuye a la planificación de tratamientos efectivos.',
    '../../../../../../assets/images/especialidades/Patólogo Oral.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/0uoEZz4zoLA'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    7,
    'Periodoncista',
    'El periodoncista se especializa en el tratamiento de enfermedades de las encías y estructuras de soporte dental. Realizan procedimientos para tratar la gingivitis, periodontitis y restaurar la salud periodontal.',
    'Curetajes, Cirugía periodontal, Injertos de encías',
    'La periodoncia es esencial para mantener encías saludables y prevenir la pérdida dental causada por enfermedades periodontales. Contribuye a la salud a largo plazo de los tejidos de soporte dental.',
    '../../../../../../assets/images/especialidades/Periodoncista.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/GUeEzZs6M60'  // Rellena con la URL del video si la tienes
  ),
  new Especialidad(
    8,
    'Dentista General',
    'El dentista general proporciona atención dental general y preventiva. Ofrecen servicios como limpiezas, exámenes dentales, selladores y tratamientos para mantener la salud bucal.',
    'Exámenes dentales regulares, Limpiezas, Selladores dentales',
    'La atención dental general es fundamental para prevenir problemas dentales y mantener una boca saludable. Contribuye al bienestar general del paciente.',
    '../../../../../../assets/images/especialidades/Dentista General.jpg',  // Rellena con la ruta de la imagen si la tienes
    'https://www.youtube.com/embed/omL-WQu7_VU'  // Rellena con la URL del video si la tienes
  ),

];
