export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  estimatedDuration: string;
  iconName: 'Scale' | 'ShieldAlert' | 'FileText' | 'AlertCircle';
  badge: string;
  features: string[];
  whatsappMessage: string;
}

export const LAWYER_INFO = {
  name: 'Dra. Rita Raffaele',
  title: 'Abogada Laboralista',
  specialty: 'Especialista en Derecho del Trabajo y Relaciones Laborales',
  credentials: [
    'Egresada con Honores - Universidad de Buenos Aires (UBA)',
    'Matrícula CPACF Tomo 108 Folio 742 / CASI',
    'Posgrado en Derecho del Trabajo y Litigación Laboral Compleja',
    'Más de 10 años de trayectoria defendiendo a trabajadores'
  ],
  phoneDisplay: '+54 9 11 4987-6543',
  phoneClean: '5491149876543',
  address: 'Av. Corrientes 1435, Piso 6, Of. 62, Tribunales, CABA',
  city: 'Ciudad Autónoma de Buenos Aires, Argentina',
  hours: 'Lunes a Viernes de 09:00 a 18:30 hs',
  emergencyNote: 'Guardia activa para despidos recientes y recepción de cartas documento 24/7 vía WhatsApp',
  email: 'consultas@estudioraffaele-laboral.com.ar',
  resultsStat: '98%',
  resultsLabel: 'Casos resueltos favorablemente o conciliados con éxito',
  yearsExperience: '10+',
  workersDefended: '+2.100',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'despidos',
    number: '01',
    title: 'Despidos y Liquidaciones Finales',
    shortDesc: 'Defensa integral ante despidos con o sin causa, despidos verbales o discriminatorios con cálculo estricto de rubros.',
    fullDesc: 'Asesoramiento técnico inmediato frente a despidos injustificados, despidos indirectos por falta de pago o injuria laboral, impugnación de causas ficticias y cálculo exacto de la indemnización por antigüedad, preaviso y multas aplicables según la ley laboral.',
    estimatedDuration: '45 a 60 minutos',
    iconName: 'Scale',
    badge: 'Máxima Indemnización',
    features: [
      'Redacción inmediata de telegramas laborales ley 23.789 sin costo',
      'Impugnación de despidos con causas infundadas o inventadas',
      'Cálculo estricto de liquidación final, aguinaldo y vacaciones',
      'Gestión y patrocinio letrado en audiencias de conciliación SECLO'
    ],
    whatsappMessage: 'Hola Dra. Rita Raffaele, necesito asesoramiento por un despido reciente. ¿Cómo podemos coordinar una consulta?'
  },
  {
    id: 'accidentes-art',
    number: '02',
    title: 'Accidentes de Trabajo y Reclamos ante ART',
    shortDesc: 'Reclamos por indemnizaciones por incapacidad física o psicológica ante la Aseguradora de Riesgos del Trabajo.',
    fullDesc: 'Representación jurídica ante accidentes sufridos en el lugar de trabajo o en el trayecto de ida y vuelta (in itinere), así como enfermedades profesionales causadas por la actividad. Acompañamiento ante Comisiones Médicas de la SRT y demandas judiciales para el cobro íntegro.',
    estimatedDuration: '45 minutos',
    iconName: 'ShieldAlert',
    badge: 'Cobro de Indemnización',
    features: [
      'Evaluación con médicos legistas y peritos de parte de confianza',
      'Reclamo de alta médica prematura o indebida por parte de la ART',
      'Cálculo e intimación de cobro de indemnización por incapacidad',
      'Acompañamiento presencial a las audiencias médicas obligatorias'
    ],
    whatsappMessage: 'Hola Dra. Rita Raffaele, sufrí un accidente laboral / tengo un reclamo contra mi ART y quiero conocer mis derechos.'
  },
  {
    id: 'trabajo-no-registrado',
    number: '03',
    title: 'Trabajo No Registrado ("En Negro") y Diferencias',
    shortDesc: 'Regularización e indemnizaciones agravadas por empleo en negro o registración defectuosa en recibo.',
    fullDesc: 'Acciones legales contundentes ante situaciones de informalidad laboral: falta total de aportes, sueldos cobrados "en mano" no reflejados en el recibo, fecha de ingreso posdatada o categoría profesional inferior a las tareas reales desempeñadas.',
    estimatedDuration: '40 a 50 minutos',
    iconName: 'FileText',
    badge: 'Indemnizaciones Agravadas',
    features: [
      'Intimación fehaciente a la empresa y a la AFIP/ARCA',
      'Reclamo de diferencias salariales por convenio colectivo',
      'Exigencia de multas legales por empleo no registrado o falseado',
      'Negociación de salida con máxima indemnización a tu favor'
    ],
    whatsappMessage: 'Hola Dra. Rita Raffaele, trabajo total o parcialmente en negro / cobro parte de mi sueldo en mano y quiero reclamar.'
  },
  {
    id: 'acoso-sanciones',
    number: '04',
    title: 'Acoso Laboral, Sanciones e Ius Variandi',
    shortDesc: 'Protección legal ante mobbing, hostigamiento, suspensiones indebidas o cambio perjudicial de condiciones.',
    fullDesc: 'Intervención inmediata frente al hostigamiento psicológico, violencia laboral, suspensiones disciplinarias abusivas, traslados geográficos lesivos o rebajas unilaterales de salario y horario (ius variandi abusivo) que atentan contra la dignidad y salud del trabajador.',
    estimatedDuration: '45 a 50 minutos',
    iconName: 'AlertCircle',
    badge: 'Cese Inmediato y Resarcimiento',
    features: [
      'Impugnación legal de suspensiones y apercibimientos dentro del plazo',
      'Medidas cautelares y cese inmediato del hostigamiento en el puesto',
      'Configuración de despido indirecto con indemnización agravada',
      'Reclamo de resarcimiento por daño moral, físico y psicológico'
    ],
    whatsappMessage: 'Hola Dra. Rita Raffaele, estoy viviendo una situación de hostigamiento / sanción injusta en mi trabajo y necesito asistencia legal.'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Honorarios a Resultado',
    description: 'En reclamos laborales se pacta cuota litis: solo cobramos honorarios profesionales si vos cobrás tu indemnización.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Atención 100% Personalizada',
    description: 'Tu causa no es un expediente más. Serás atendido y patrocinado directamente por la Dra. Rita Raffaele.',
    icon: 'UserCheck'
  },
  {
    title: 'Celeridad y Telegramas Sin Costo',
    description: 'Los telegramas laborales son gratuitos para el trabajador por ley 23.789. Te los redactamos y enviamos en el día.',
    icon: 'Zap'
  },
  {
    title: 'Presencial y Virtual',
    description: 'Atendemos tanto en nuestro estudio ubicado en Tribunales (CABA) como de forma online a todo el país.',
    icon: 'Laptop'
  }
];

export const PROCESS_STEPS = [
  {
    step: '1',
    title: 'Contacto Inmediato por WhatsApp',
    description: 'Nos escribís, nos comentás brevemente tu situación y coordinamos un turno presencial o videollamada para una evaluación inicial.'
  },
  {
    step: '2',
    title: 'Auditoría Jurídica del Caso',
    description: 'Revisamos recibos de sueldo, cartas documento, historial médico o testigos. Calculamos con exactitud los rubros adeudados.'
  },
  {
    step: '3',
    title: 'Intimación y Etapa Conciliatoria',
    description: 'Redactamos los telegramas laborales pertinentes y convocamos a la patronal a instancia conciliatoria (SECLO o Ministerio de Trabajo).'
  },
  {
    step: '4',
    title: 'Cobro de tu Indemnización',
    description: 'Negociamos el acuerdo económico más conveniente o avanzamos a juicio laboral con total solidez hasta el cobro efectivo.'
  }
];

export const FAQS = [
  {
    question: '¿Qué debo hacer si me despidieron verbalmente y me dijeron que no vaya más?',
    answer: 'Nunca dejes de asistir sin antes enviar un telegrama laboral intimando a que aclaren tu situación laboral. El despido verbal no tiene validez legal y el empleador podría considerarte incurso en abandono de trabajo. Comunicate urgente con nosotros para redactarte el telegrama gratuito en el día.'
  },
  {
    question: '¿Tengo que pagar por la primera consulta?',
    answer: 'No. La primera evaluación de tu caso es completamente sin cargo y sin compromiso. Analizamos la viabilidad de tu reclamo y te explicamos tus opciones con total transparencia.'
  },
  {
    question: '¿Cómo se abonan los honorarios de la abogada?',
    answer: 'Trabajamos bajo la modalidad de cuota litis (a resultado) en la gran mayoría de los casos de despidos y accidentes laborales. Esto significa que solo percibimos honorarios cuando vos percibís tu indemnización o acuerdo.'
  },
  {
    question: '¿Qué plazo tengo para reclamar por un accidente de trabajo o enfermedad profesional?',
    answer: 'El plazo legal general de prescripción para reclamos ante la ART es de 2 años desde el accidente o desde la determinación de la incapacidad. No obstante, es fundamental consultar cuanto antes para impugnar altas apresuradas y asegurar las pruebas médicas necesarias.'
  },
  {
    question: '¿Qué pasa si trabajaba en negro o cobraba parte de mi sueldo en mano?',
    answer: 'La ley laboral sanciona severamente la informalidad laboral. Tenés derecho a intimar la correcta registración y, si no lo hacen, considerarte despedido con derecho a cobrar no solo la indemnización básica sino importantes multas e indemnizaciones agravadas.'
  },
  {
    question: '¿Cuánto tiempo demora un reclamo laboral?',
    answer: 'En etapa conciliatoria prejudicial (SECLO en CABA o delegaciones ministeriales), los acuerdos suelen cerrarse en un plazo de entre 20 y 60 días. Si la empresa no ofrece un monto justo y se inicia juicio, el plazo es mayor pero los montos devengan intereses legales.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Carlos M. Albarracín',
    role: 'Ex encargado de logística - Despido incausado',
    text: 'Me despidieron tras 8 años en la empresa ofreciéndome la mitad de lo que me correspondía. La Dra. Raffaele tomó mi caso, redactó los telegramas y en menos de 45 días en el SECLO cobré el 100% de la indemnización con los intereses correspondientes. Una profesional intachable.',
    rating: 5,
    city: 'CABA'
  },
  {
    name: 'Laura G. Benítez',
    role: 'Administrativa - Trabajo mal registrado',
    text: 'Cobraba parte en blanco y parte en mano. Cuando reclamé me quisieron sancionar. La contención humana y la firmeza jurídica de Rita me dieron total tranquilidad. Logramos un acuerdo excelente sin necesidad de un juicio largo.',
    rating: 5,
    city: 'Buenos Aires'
  },
  {
    name: 'Guillermo R. Pereyra',
    role: 'Operario industrial - Reclamo ART por hernia discal',
    text: 'La ART me dio el alta médica con 0% de incapacidad a pesar del dolor. Con el estudio de la Dra. Raffaele fuimos a comisiones médicas con perito de parte y reconocieron mi incapacidad real con una indemnización justa. Sumamente agradecido.',
    rating: 5,
    city: 'GBA Norte'
  }
];
