const cv_it = require("./_cv/CV_it.pdf");
const cv_es = require("./_cv/CV_es.pdf");
const cv_de = require("./_cv/CV_de.pdf");
const cv_fr = require("./_cv/CV_fr.pdf");

export const CV_FILES: Record<string, string> = {
  it: cv_it,
  fr: cv_fr,
  de: cv_de,
  es: cv_es,
};
