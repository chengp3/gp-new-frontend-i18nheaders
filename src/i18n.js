import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          headers: {
            version: 'Versión',
            sponsoredBy: 'Patrocinado por',
            updated: 'actualizado',
            currentLocale: 'Configuración regional actual',
            overview: 'Visión General',
            targetSubject: 'Sujeto de destino',
            grades: 'Grados',
            estimatedTime: 'Hora prevista',
            subjectBreakdown: 'Desglose de materias por alineaciones estándar:',
            drivingQuestions: 'Pregunta(s) de conducción:',
            essentialQuestions: 'Preguntas esencialess:',
            hooks: 'Manos',
            keywords: 'Palabras clave',
            lessonDescription: 'Descripción de la lección',
            lessonPreview: 'Vista previa de la lección',
            teachItIn15: 'Preparación rápida "Enséñalo en 15',
            teachingMaterials: 'Materiales de enseñanza',
            classroomInPerson: 'Materiales de enseñanza en el aula/en persona',
            resourcesNeeded: 'Recursos necesitados:',
            grades59: 'Grados 5-9',
            downloadGrades59: 'Descargar G5-9 Materiales para todas las piezas',
            procedure: 'Procedimiento',
            part: 'parte',
            background: 'Fondo',
            learningStandards: 'Estándares de aprendizaje',
            aboutChart: 'Acerca de la tabla de aprendizaje de cabecera',
            targetStandards: 'Estándar(es) objetivo',
            connectedStandards: 'Estándar(es) conectado(s)',
            feedback: 'Retroalimentación',
            feedbackTop: '¡Cuéntanos cómo te fue con tu clase!',
            feedbackExp: 'Comparta sus comentarios en < 5 min con estos formularios:',
            forTeachers: 'para profesores',
            forStudents: 'para estudiantes',
            feedback: 'Créditos',
            Acknowledgments: 'Expresiones de gratitud',
            versionNotes: 'Notas de la versión'
          }
        }
      }
    }
  });

export default i18n;