import español from "./es.json"
import ingles from "./en.json"

const LANGUAGES ={
    ESPAÑOL: 'es',
    INGLES: 'en'
}

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ESPAÑOL) return español;
  if (currentLocale === LANGUAGES.INGLES) return ingles;
  return español;
};