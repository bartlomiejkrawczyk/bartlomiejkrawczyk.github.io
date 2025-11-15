export const tagIds = [
  "sages",
  "side_project",
  "university",
  "thesis",
  "cyfrowy_polsat",
  "it_run",

  "java",
  "kotlin",
  "sql",
  "scala",
  "python",
  "rust",
  "go",
  "c",
  "cpp",
  "pl_sql",
  "html",
  "css",
  "javascript",
  "typescript",
  "haskell",
  "prolog",
  //   "bash",
  //   "groovy",
  //   "ampl",
  //   "tex",
  //   "matlab",
  //   "assembly_x86",
  //   "assembly_mips",
  //   "makefile",
  //   "makefile",

  //   "spring"
  //   "ktor"
  //   "helidon"
  //   "micronaut"
  //   "jsf"
  //   "prime_faces"
  //   "hibernate"
  //   "jax_rs"
  //   "jersey"
  //   "jetty"
  //   "netty"
  //   "jboss_seam"
  //   "apache_hadoop"
  //   "apache_hive"
  //   "axon"
  //   "android"
  //   "react_js"
  //   "astro_js"

  //   "django"
  //   "flask"
  //   "pandas"
  //   "py_spark"
  //   "py_torch"
  //   "keras"
  //   "num_py"
  //   "matplotlib"

  //   "tdd"
  //   "agile"
  //   "scrum"

  //   "docker"
  //   "ci_cd"
  //   "kubernetes"
  //   "s3"
  //   "keycloak"
  //   "liquibase"
  //   "sonar_qube"
  //   "wildfly"

  //   "gradle"
  //   "maven"

  //   "git"
  //   "github"
  //   "gitlab"
  //   "bitbucket"
  //   "jira"
  //   "trello"

  //   "linux"
  //   "windows"
  //   "ubuntu"
  //   "wsl"

  //   "apache_active_mq"
  //   "apache_kafka"
  //   "apache_log4j"
  //   "slf4j"
  //   "apache_pdf_box"
  //   "apache_poi"
  //   "apache_solr"
  //   "apache_spark"
  //   "apache_flink"
  //   "apache_tika"
  //   "apache_tomcat"
  //   "apache_zookeeper"
  //   "bouncy_castle"
  //   "deep_java_library"
  //   "elastic_search"
  //   "google_gson"
  //   "google_guava"
  //   "jackson"
  //   "java_fx"
  //   "jaxb" - xml
  //   "open_cv"
  //   "quartz"

  //   "junit"
  //   "mockito"
  //   "spock"

  //   k8s:
  //   "azure"
  //   "gcp"

  //   vps:
  //   "azure"
  //   "gcp"
  //   "oci" - oracle cloud
  //   "ovh" - OVHcloud

  //   "spring_boot"
  //   "spring_data"
  //   "spring_security"
  //   "spring_cloud"

  //   "spring_mvc"
  //   "spring_webflux"

  //   "vscode"
  //   "intellij"
  //   "pycharm"
  //   "go_land"
  //   "rust_rover"
  //   "c_lion"
  //   "data_grip"

  //   "mongo_db"
  //   "arango_db"
  //   "postgres"
  //   "oracle"
  //   "mysql"
  //   "mariadb"
  //   "sqlite"

  //   "MS Office"
  //   "Libre Office"

  //   "driving",
  //   "driving_AM",
  //   "driving_B",
  //   "driving_B1",
] as const;

export const tagTypes = [
  "company",
  "language",
  "framework",
  "technology",
  "cloud",
  "library",
  "database",
  "other",
] as const;

type TagId = (typeof tagIds)[number];
type TagType = (typeof tagTypes)[number];

interface Tag {
  id: TagId;
  type: TagType;
  link?: string;
  translation: { en: string; pl?: string };
  level?: number;
}

export const tags: Record<TagId, Tag> = {
  sages: {
    id: "sages",
    type: "company",
    link: "https://www.sages.pl/",
    translation: { en: "Sages" },
  },
  side_project: {
    id: "side_project",
    type: "company",
    translation: { en: "Side Project", pl: "Poboczny Projekt" },
  },
  university: {
    id: "university",
    type: "company",
    link: "https://eng.pw.edu.pl/",
    translation: { en: "University", pl: "Uczelnia" },
  },
  thesis: {
    id: "thesis",
    type: "company",
    link: "https://eng.pw.edu.pl/",
    translation: { en: "Thesis", pl: "Praca Dyplomowa" },
  },
  cyfrowy_polsat: {
    id: "cyfrowy_polsat",
    type: "company",
    link: "https://www.polsatbox.pl/",
    translation: { en: "Polsat Box", pl: "Cyfrowy Polsat" },
  },
  it_run: {
    id: "it_run",
    type: "company",
    link: "https://itrun.com.pl/",
    translation: { en: "Polsat Box", pl: "Cyfrowy Polsat" },
  },
  java: {
    id: "java",
    type: "language",
    translation: { en: "Java" },
    link: "https://www.java.com/",
  },
  kotlin: {
    id: "kotlin",
    type: "language",
    link: "https://kotlinlang.org/",
    translation: { en: "Kotlin" },
  },
  scala: {
    id: "scala",
    type: "language",
    link: "https://www.scala-lang.org/",
    translation: { en: "Scala" },
  },
  c: {
    id: "c",
    type: "language",
    link: "https://www.c-language.org/",
    translation: { en: "C" },
  },
  cpp: {
    id: "cpp",
    type: "language",
    link: "https://en.cppreference.com/w/",
    translation: { en: "C++" },
  },
  sql: {
    id: "sql",
    type: "language",
    link: "https://pl.wikipedia.org/wiki/SQL",
    translation: { en: "SQL" },
  },
  python: {
    id: "python",
    type: "language",
    link: "https://www.python.org/",
    translation: { en: "Python" },
  },
  rust: {
    id: "rust",
    type: "language",
    link: "https://rust-lang.org/",
    translation: { en: "Rust" },
  },
  go: {
    id: "go",
    type: "language",
    link: "https://go.dev/",
    translation: { en: "Go" },
  },
  pl_sql: {
    id: "pl_sql",
    type: "language",
    link: "https://www.oracle.com/database/technologies/appdev/plsql.html",
    translation: { en: "PL/SQL" },
  },
  html: {
    id: "html",
    type: "language",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    translation: { en: "HTML" },
  },
  css: {
    id: "css",
    type: "language",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    translation: { en: "CSS" },
  },
  javascript: {
    id: "javascript",
    type: "language",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    translation: { en: "JavaScript" },
  },
  typescript: {
    id: "typescript",
    type: "language",
    link: "https://www.typescriptlang.org/",
    translation: { en: "TypeScript" },
  },
  haskell: {
    id: "haskell",
    type: "language",
    link: "https://www.haskell.org/",
    translation: { en: "Haskell" },
  },
  prolog: {
    id: "prolog",
    type: "language",
    link: "https://www.swi-prolog.org/",
    translation: { en: "Prolog" },
  },
};
