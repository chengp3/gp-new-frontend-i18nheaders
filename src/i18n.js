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
      sp: {
        translation: {
          headers: {
            Title: 'Título',
            Heading: 'Título',
            version: 'Versión',
            sponsoredBy: 'Patrocinado por',
            updated: 'actualizado',
            currentLocale: 'Configuración regional actual',

            Overview: 'Visión General',
            targetSubject: 'Sujeto de destino: ',
            grades: 'Grados',
            estimatedTime: 'Hora prevista',
            subjectBreakdown: 'Desglose de materias por alineaciones estándar: ',
            Keywords: 'Palabras clave',
            lessonDescription: 'Descripción de la lección',

            Preview: 'Vista previa de la lección',
            teachItIn15: 'Preparación rápida: "Enséñalo en 15"',

            TeachingMaterials: 'Materiales de enseñanza',
            classroomInPerson: 'Materiales de enseñanza en el aula/en persona',
            resourcesNeeded: 'Recursos necesitados:',
            
            Procedure: 'Procedimiento',
            Part: 'Parte',

            LearningStandards: 'Estándares de aprendizaje',
            Note: 'Nota:', 
            ClickOn: 'Haga clic en cualquier estándar',
            ForDetails: ' para obtener detalles sobre cómo se alinea la lección.',
            TargetStandards: 'Estándar(es) objetivo',
            ConnectedStandards: 'Estándar(es) conectado(s)',
            Dimension: 'Dimensión: ',

            Acknowledgments: 'Expresiones de gratitud',

            VersionNotes: 'Notas de la versión'
          }
        }
      },
      enUS: {
        translation: {
          headers: {
            Title: 'Title',
            Heading: 'Heading',
            version: 'Version',
            sponsoredBy: 'Sponsored By',
            updated: 'updated',
            currentLocale: 'Current Locale: ',

            Overview: 'Overview',
            targetSubject: 'Target Subject: ',
            grades: 'Grades',
            estimatedTime: 'Estimated Time: ',
            subjectBreakdown: 'Subject breakdown by standard alignments: ',
            Keywords: 'Keywords: ',
            lessonDescription: 'Lesson Description ',

            Preview: 'Lesson Preview',
            teachItIn15: '"Teach it in 15" Quick Prep',

            TeachingMaterials: 'Teaching Materials',
            classroomInPerson: 'Classroom/In-person Teaching Materials',
            resourcesNeeded: 'Resources needed:',
            
            Procedure: 'Procedure',
            Part: 'Part',

            LearningStandards: 'Learning Standards',
            Note: 'Note:', 
            ClickOn: 'Click on any standard',
            ForDetails: ' for details on how the lesson the aligns to it.',
            TargetStandards: 'Target Standard(s)',
            ConnectedStandards: 'Connected Standard(s)',
            Dimension: 'Dimension: ',
            
            Acknowledgments: 'Acknowledgments',

            VersionNotes: 'Version Notes'
          }
        }
      }
    }
  });

export default i18n;