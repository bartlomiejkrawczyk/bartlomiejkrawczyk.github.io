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
  "bash",
  "groovy",
  "ampl",
  "tex",
  "matlab",
  "assembly_x86",
  "assembly_mips",
  "makefile",

  "spring",
  "ktor",
  "helidon",
  "micronaut",
  "jsf",
  "prime_faces",
  "hibernate",
  "jakarta_ee",
  "jax_rs",
  "jakarta_cdi",
  "jboss_seam",
  "apache_hadoop",
  "axon",
  "android",
  "react_js",
  "astro_js",
  "django",
  "flask",

  //   "tdd",
  //   "agile",
  //   "scrum",

  "docker",
  //   "ci_cd",
  //   "kubernetes",
  //   "s3",
  //   "keycloak",
  //   "liquibase",
  //   "sonar_qube",
  //   "wildfly"
  //   "jersey",
  //   "jetty",
  //   "netty",

  //   "iac", Infrastructure as Code
  //   "puppet",
  //   "ansible",

  "gradle",
  "maven",
  "sbt",
  "node_js",

  //   "wcag"

  //   "figma",

  "git",
  "github",
  "gitlab",
  "bitbucket",
  "jira",
  "trello",

  "linux",
  "windows",
  "ubuntu",
  "wsl",

  //   "apache_active_mq",
  //   "apache_rabbit_mq",
  //   "apache_kafka",
  //   "apache_log4j",
  //   "slf4j",
  //   "logback",
  //   "apache_pdf_box",
  //   "apache_poi",
  //   "apache_solr",
  //   "apache_spark",
  //   "apache_flink",
  //   "apache_tika",
  //   "apache_tomcat",
  //   "apache_zookeeper",
  //   "bouncy_castle",
  //   "deep_java_library",
  //   "elastic_search",
  //   "google_gson",
  //   "google_guava",
  //   "jackson",
  //   "java_fx",
  //   "jaxb" - xml
  //   "open_cv",
  //   "quartz",
  //   "jetbrains_exposed",
  //   "cas", // Central Authentication Service
  //   "kotlin_arrow",
  //   "fuel",
  //   "hoplite",
  //   "apache_commons",
  //   "excel_kt",
  //   "simple_java_mail",
  //   "kotest",

  //   "open_api",
  //   "swagger",

  // "tailwind",
  // "expressive-code",
  // "playwright",
  // "polyglot",
  // "rehype",
  // "remark",

  "pandas",
  //   "py_spark",
  //   "py_torch",
  //   "keras",
  //   "num_py",
  //   "matplotlib"

  //   "junit",
  //   "mockito",
  //   "spock"

  //   k8s:
  //   "azure",
  //   "gcp"

  //   vps:
  //   "azure",
  //   "gcp",
  //   "oci" - oracle cloud
  //   "ovh" - OVHcloud

  //   "spring_boot",
  //   "spring_aop",
  //   "spring_data",
  //   "spring_security",
  //   "spring_cloud"

  //   "spring_mvc",
  //   "spring_webflux"

  //   "vscode",
  //   "intellij",
  //   "pycharm",
  //   "go_land",
  //   "rust_rover",
  //   "c_lion",
  //   "data_grip"

  "apache_hive",
  //   "mongo_db",
  //   "arango_db",
  //   "postgres",
  //   "oracle",
  //   "mysql",
  //   "mariadb",
  //   "sqlite",
  //   "redis",
  //   "ms_access",
  //   "firebase",
  //   "h2",

  //   "replication",
  //   "load_balancing",

  //   "basic_auth",
  //   "oauth2",
  //   "otp", // one-time password

  //   "MS Office",
  //   "Libre Office"

  //   "driving",
  //   "driving_AM",
  //   "driving_B",
  //   "driving_B1",

  //   "arduino",
  //   "arduino", // TODO: this one course - from Spain
] as const;

export const tagTypes = [
  "company",
  "language",
  "framework",
  "technology",
  "tool",
  "operating_system",
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
  bash: {
    id: "bash",
    type: "language",
    link: "https://www.gnu.org/software/bash/",
    translation: { en: "Bash" },
  },
  groovy: {
    id: "groovy",
    type: "language",
    link: "https://groovy-lang.org/",
    translation: { en: "Groovy" },
  },
  ampl: {
    id: "ampl",
    type: "language",
    link: "https://ampl.com/",
    translation: { en: "AMPL" },
  },
  tex: {
    id: "tex",
    type: "language",
    link: "https://www.latex-project.org/get/",
    translation: { en: "LaTeX" },
  },
  matlab: {
    id: "matlab",
    type: "language",
    link: "https://www.mathworks.com/products/matlab.html",
    translation: { en: "Matlab" },
  },
  assembly_x86: {
    id: "assembly_x86",
    type: "language",
    link: "https://en.wikipedia.org/wiki/X86_assembly_language",
    translation: { en: "x86 assembly" },
  },
  assembly_mips: {
    id: "assembly_mips",
    type: "language",
    link: "https://en.wikibooks.org/wiki/MIPS_Assembly/MIPS_Instructions",
    translation: { en: "MIPS assembly" },
  },
  spring: {
    id: "spring",
    type: "framework",
    link: "https://spring.io/projects/spring-framework",
    translation: { en: "Spring" },
  },
  ktor: {
    id: "ktor",
    type: "framework",
    link: "https://ktor.io/",
    translation: { en: "Ktor" },
  },
  helidon: {
    id: "helidon",
    type: "framework",
    link: "https://helidon.io/",
    translation: { en: "Helidon" },
  },
  micronaut: {
    id: "micronaut",
    type: "framework",
    link: "https://micronaut.io/",
    translation: { en: "Micronaut" },
  },
  jsf: {
    id: "jsf",
    type: "framework",
    link: "https://github.com/jakartaee/faces",
    translation: { en: "Java Server Faces" },
  },
  prime_faces: {
    id: "prime_faces",
    type: "framework",
    link: "https://www.primefaces.org/",
    translation: { en: "Prime Faces" },
  },
  hibernate: {
    id: "hibernate",
    type: "framework",
    link: "https://hibernate.org/",
    translation: { en: "Hibernate" },
  },
  jakarta_ee: {
    id: "jakarta_ee",
    type: "framework",
    link: "https://jakarta.ee/specifications/",
    translation: { en: "Jakarta CDI" },
  },
  jax_rs: {
    id: "jax_rs",
    type: "framework",
    link: "https://projects.eclipse.org/projects/ee4j.rest",
    translation: { en: "Jakarta RESTful Web Services" },
  },
  jakarta_cdi: {
    id: "jakarta_cdi",
    type: "framework",
    link: "https://www.cdi-spec.org/",
    translation: { en: "Jakarta CDI" },
  },
  jboss_seam: {
    id: "jboss_seam",
    type: "framework",
    link: "https://www.seamframework.org/",
    translation: { en: "JBoss Seam" },
  },
  apache_hadoop: {
    id: "apache_hadoop",
    type: "framework",
    link: "https://hadoop.apache.org/",
    translation: { en: "Apache Hadoop" },
  },
  axon: {
    id: "axon",
    type: "framework",
    link: "https://www.axoniq.io/framework",
    translation: { en: "AXON Framework" },
  },
  android: {
    id: "android",
    type: "framework",
    link: "https://developer.android.com/",
    translation: { en: "Android" },
  },
  react_js: {
    id: "react_js",
    type: "framework",
    link: "https://react.dev/",
    translation: { en: "React.js" },
  },
  astro_js: {
    id: "astro_js",
    type: "framework",
    link: "https://astro.build/",
    translation: { en: "Astro.js" },
  },
  django: {
    id: "django",
    type: "framework",
    link: "https://www.djangoproject.com/",
    translation: { en: "Django" },
  },
  flask: {
    id: "flask",
    type: "framework",
    link: "https://flask.palletsprojects.com/en/stable/",
    translation: { en: "Flask" },
  },
  docker: {
    id: "docker",
    type: "technology",
    link: "https://www.docker.com/",
    translation: { en: "Docker" },
  },
  gradle: {
    id: "gradle",
    type: "tool",
    link: "https://gradle.org/",
    translation: { en: "Gradle" },
  },
  maven: {
    id: "maven",
    type: "tool",
    link: "https://maven.apache.org/",
    translation: { en: "Maven" },
  },
  sbt: {
    id: "sbt",
    type: "tool",
    link: "https://www.scala-sbt.org/",
    translation: { en: "SBT" },
  },
  node_js: {
    id: "node_js",
    type: "tool",
    link: "https://nodejs.org/",
    translation: { en: "Node.js" },
  },
  git: {
    id: "git",
    type: "tool",
    link: "https://git-scm.com/",
    translation: { en: "git" },
  },
  github: {
    id: "github",
    type: "tool",
    link: "https://github.com/",
    translation: { en: "Github" },
  },
  gitlab: {
    id: "gitlab",
    type: "tool",
    link: "https://about.gitlab.com/",
    translation: { en: "GitLab" },
  },
  bitbucket: {
    id: "bitbucket",
    type: "tool",
    link: "https://bitbucket.org/product/",
    translation: { en: "Bitbucket" },
  },
  jira: {
    id: "jira",
    type: "tool",
    link: "https://www.atlassian.com/software/jira",
    translation: { en: "Jira" },
  },
  trello: {
    id: "trello",
    type: "tool",
    link: "https://trello.com/",
    translation: { en: "Trello" },
  },
  linux: {
    id: "linux",
    type: "operating_system",
    translation: { en: "Linux" },
  },
  ubuntu: {
    id: "ubuntu",
    type: "operating_system",
    link: "https://ubuntu.com/",
    translation: { en: "Ubuntu" },
  },
  windows: {
    id: "windows",
    type: "operating_system",
    link: "https://www.microsoft.com/windows",
    translation: { en: "Windows" },
  },
  wsl: {
    id: "wsl",
    type: "operating_system",
    link: "https://learn.microsoft.com/en-us/windows/wsl/install",
    translation: { en: "WSL" },
  },
  pandas: {
    id: "pandas",
    type: "library",
    link: "https://pandas.pydata.org/",
    translation: { en: "Pandas" },
  },
  apache_hive: {
    id: "apache_hive",
    type: "database",
    link: "https://hive.apache.org/",
    translation: { en: "Apache Hive" },
  },
  makefile: {
    id: "makefile",
    type: "tool",
    link: "https://www.gnu.org/software/make/manual/make.html",
    translation: { en: "Makefile" },
  },
};
