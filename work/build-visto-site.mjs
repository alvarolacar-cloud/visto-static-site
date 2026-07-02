import fs from "node:fs";
import path from "node:path";

const workspace = process.cwd();
const inputDir = path.join(workspace, "inputs");
const sourcePath = (localName) => {
  const localPath = path.join(inputDir, localName);
  if (!fs.existsSync(localPath)) throw new Error(`Missing input source: ${localPath}`);
  return localPath;
};
const updatedHomePath = sourcePath("home-C-mezcla.html");
const methodMarkdownPath = sourcePath("metodo-completo.md");
const sectorYamlPath = sourcePath("sectores-contenido.yaml");
const outDir = path.join(workspace, "outputs", "visto-site");

const pages = [
  { srcPath: updatedHomePath, dest: "home.html" },
  { srcPath: sourcePath("sectores-visto.html"), dest: "sectores.html" },
  { srcPath: sourcePath("sector-fontaneros-visto.html"), dest: "sector.html" },
  { srcPath: sourcePath("fontaneros-madrid-visto.html"), dest: "fontaneros-madrid.html" },
  { srcPath: sourcePath("nuestros-resultados-visto.html"), dest: "nuestros-resultados.html" },
  { srcPath: sourcePath("metodo-visto.html"), dest: "metodo.html" },
  { srcPath: sourcePath("metodo-fase1-visto.html"), dest: "metodo-fase1.html" },
  { srcPath: sourcePath("paso-categoria-visto.html"), dest: "paso-categoria.html" },
];

const generatedMethodPages = ["metodo-fase2.html", "metodo-fase3.html", "metodo-fase4.html"];
const generatedRedesignPages = ["home-redesign.html"];
const staticAliasPages = ["index.html"];
let builtPageNames = [...pages.map((page) => page.dest), ...generatedMethodPages, ...generatedRedesignPages, ...staticAliasPages];
let builtPages = new Set(builtPageNames);
const fontHref =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";

const commonHeader = String.raw`<div class="topbar">
  <div class="wrap">
    <span class="tb-msg">SEO local basado en datos</span>
  </div>
</div>

<header class="site-nav">
  <div class="wrap">
    <a class="brand" href="home.html"><span class="check">&#10003;</span><span class="bname">Visto <small>&middot; tu pata digital</small></span></a>
    <label class="nav-search2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input type="text" placeholder="Busca tu sector o ciudad..." aria-label="Busca tu sector o ciudad"></label>
    <nav class="nav-links">
      <a href="sectores.html">Tu Sector</a>
      <a href="metodo.html">C&oacute;mo Trabajamos</a>
      <a href="nuestros-resultados.html">Nuestros Resultados</a>
      <a href="#">Blog</a>
    </nav>
    <a class="nav-cta" href="home.html#contacto">Calcular mi mercado <span class="bolt">&#9889;</span></a>
  </div>
  </header>`;

const commonFooter = String.raw`<footer class="vfoot">
    <div class="vfoot-inner">
      <div class="vfoot-top">
        <a class="fbrand" href="home.html"><span class="brand-mark"></span><span>Visto</span></a>
        <p>SEO local para negocios que necesitan aparecer, ser elegidos y recibir llamadas medibles.</p>
      </div>
      <div class="vfoot-cols">
        <div>
          <h4>Sectores</h4>
          <a href="sector.html">Fontaneros</a>
          <a href="sector-electricistas.html">Electricistas</a>
          <a href="sector-reformas-integrales.html">Reformas</a>
          <a href="sector-pintores.html">Pintores</a>
          <a href="sector-albaniles.html">Alba&ntilde;iles</a>
          <a href="sector-cerrajeros.html">Cerrajeros</a>
          <a href="sector-carpinteros.html">Carpinteros</a>
          <a href="sector-aire-acondicionado.html">Aire acondicionado</a>
        </div>
        <div>
          <h4>M&aacute;s sectores</h4>
          <a href="sector-jardineria.html">Jardineros</a>
          <a href="sector-empresas-de-limpieza.html">Limpieza</a>
          <a href="sector-dentistas.html">Dentistas</a>
          <a href="sector-clinicas.html">Cl&iacute;nicas</a>
          <a href="sector-abogados.html">Abogados</a>
          <a href="sector-academias.html">Academias</a>
          <a href="sector-mudanzas.html">Mudanzas</a>
          <a href="sectores.html">Ver todos los sectores -></a>
        </div>
        <div>
          <h4>C&oacute;mo trabajamos</h4>
          <a href="metodo.html">El m&eacute;todo</a>
          <a href="metodo-fase1.html">Que Google te encuentre</a>
          <a href="metodo-fase2.html">Que el cliente te elija</a>
          <a href="metodo-fase3.html">Que se f&iacute;en de ti</a>
          <a href="metodo-fase4.html">Que te llamen</a>
          <a href="#">Plan de 90 d&iacute;as</a>
          <a href="#">Medici&oacute;n y llamadas</a>
        </div>
        <div>
          <h4>Visto</h4>
          <a href="nuestros-resultados.html">Nuestros resultados</a>
          <a href="#">Blog</a>
          <a href="#">Calcula tu mercado</a>
          <a href="#">Aviso legal</a>
          <a href="#">Privacidad</a>
          <div class="vfoot-social" aria-label="Redes sociales">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="X">x</a>
          </div>
          <div class="vfoot-locale"><span>Espa&ntilde;a</span><span>EUR &euro;</span></div>
        </div>
      </div>
      <div class="vfoot-bottom">
        <span>© 2026 Visto</span>
        <span>Hecho para negocios locales en Espa&ntilde;a.</span>
      </div>
    </div>
  </footer>`;

const commonShellCss = String.raw`<style id="visto-common-shell">
  :root{--maxw:1244px;--visto-green:#12A97E;--visto-green-dark:#0E8A6B;--visto-green-deep:#02251E;--visto-gold:#F2C94C;--visto-ink:#17231f;--visto-soft:#63736d;--visto-line:#e3e8e5}
  body{font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif}
  .topbar{background:#02251E;color:#cfe6dd;line-height:1.55}
  .topbar .wrap{max-width:var(--maxw);margin:0 auto;display:flex;align-items:center;justify-content:center;gap:16px;padding:8px 0;font-size:12.5px;line-height:1.55;box-sizing:border-box}
  .topbar .spacer{flex:1}
  .topbar .tb-msg{color:#b9d3ca}
  .topbar .tb-link{color:#b9d3ca;text-decoration:none}
  .topbar .tb-link:hover{color:#fff}
  .topbar .tb-cta{background:#F2C94C;color:#0c2b22;font-weight:800;padding:6px 13px;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:6px}
  .site-nav{background:#fff;border-bottom:1px solid #eef2f0;position:sticky;top:0;z-index:50;line-height:1.55}
  .site-nav .wrap{max-width:var(--maxw);margin:0 auto;display:flex;align-items:center;gap:22px;padding:13px 0;line-height:1.55;box-sizing:border-box}
  .site-nav .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:#16211E;font-weight:800;font-size:20px;letter-spacing:-.03em;line-height:1.55;white-space:nowrap;flex:none;margin:0;padding:0}
  .site-nav .brand:before,.site-nav .brand:after{content:none;display:none}
  .site-nav .brand .check{order:0;width:32px;height:32px;flex:0 0 32px;border-radius:9px;background:#12A97E;color:#fff;display:grid;place-items:center;font-size:18px;line-height:1;letter-spacing:normal;margin:0;padding:0}
  .site-nav .brand .bname{order:1;line-height:1.05;letter-spacing:normal;margin:0;padding:0}
  .site-nav .brand small{display:block;font-size:9.5px;font-weight:600;color:#8aa79a;letter-spacing:.02em}
  .brand-mark{width:27px;height:27px;background:#12A97E;border-radius:8px 8px 8px 2px;display:inline-block;position:relative;transform:rotate(-4deg);flex:0 0 auto}
  .brand-mark:after{content:"";position:absolute;left:9px;top:9px;width:9px;height:9px;border-radius:50%;background:#fff}
  .nav-search2{display:flex;align-items:center;gap:8px;background:#f4f7f5;border:1px solid #e6efe9;border-radius:24px;padding:9px 16px;min-width:240px;color:#9ab3a8;line-height:1.55;margin:0}
  .nav-search2 svg{width:16px;height:16px;flex:0 0 auto}
  .nav-search2 input{border:0;background:transparent;outline:none;font:inherit;font-size:14px;color:#16211E;width:100%;padding:0}
  .nav-links{display:flex;gap:22px;margin-left:auto;white-space:nowrap}
  .nav-links a{color:#3f5b52;text-decoration:none;font-weight:600;font-size:14.5px}
  .nav-links a:hover{color:#12A97E}
  .nav-cta{background:#12A97E;color:#fff;font-weight:800;font-size:14px;line-height:1.55;padding:11px 18px;border-radius:10px;text-decoration:none;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;flex:none;margin:0}
  .nav-cta:hover{background:#0E8E68}
  .vfoot{background:#061a15;color:#c4d7d1;margin-top:0;padding:54px 0 28px;font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif}
  .vfoot-inner{max-width:1180px;margin:0 auto;padding:0 22px;box-sizing:border-box}
  .vfoot-top{display:flex;align-items:flex-end;justify-content:space-between;gap:28px;padding-bottom:34px;border-bottom:1px solid rgba(255,255,255,.12)}
  .fbrand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-size:28px;font-weight:950;letter-spacing:-.05em}
  .vfoot-top p{max-width:470px;margin:0;color:#a8c1ba;font-weight:650;line-height:1.55}
  .vfoot-cols{display:grid;grid-template-columns:1.1fr 1.1fr 1.1fr 1fr;gap:36px;padding:34px 0 30px}
  .vfoot h4{margin:0 0 14px;color:#fff;font-size:14px;font-weight:950;letter-spacing:.02em}
  .vfoot a{display:block;color:#c4d7d1;text-decoration:none;font-size:13px;font-weight:650;line-height:2.05}
  .vfoot a:hover{color:#fff}
  .vfoot-social{display:flex;gap:10px;margin-top:18px}
  .vfoot-social a{width:34px;height:34px;border:1px solid rgba(255,255,255,.18);border-radius:50%;display:grid;place-items:center;line-height:1;color:#fff;font-weight:950;text-transform:uppercase}
  .vfoot-locale{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;color:#fff;font-size:12px;font-weight:850}
  .vfoot-locale span{border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:7px 10px;background:rgba(255,255,255,.04)}
  .vfoot-bottom{border-top:1px solid rgba(255,255,255,.12);padding-top:22px;display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;color:#8fb0a7;font-size:12px;font-weight:750}
  .mkt .vfoot{background:#061a15;color:#c4d7d1;margin-top:0;padding:54px 0 28px;font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif}
  .mkt .vfoot-inner{max-width:1180px;margin:0 auto;padding:0 22px;box-sizing:border-box}
  .mkt .vfoot-top{display:flex;align-items:flex-end;justify-content:space-between;gap:28px;padding-bottom:34px;border-bottom:1px solid rgba(255,255,255,.12)}
  .mkt .fbrand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-size:28px;font-weight:950;letter-spacing:-.05em}
  .mkt .vfoot-top p{max-width:470px;margin:0;color:#a8c1ba;font-weight:650;line-height:1.55}
  .mkt .vfoot-cols{display:grid;grid-template-columns:1.1fr 1.1fr 1.1fr 1fr;gap:36px;padding:34px 0 30px}
  .mkt .vfoot h4{margin:0 0 14px;color:#fff;font-size:14px;font-weight:950;letter-spacing:.02em}
  .mkt .vfoot a{display:block;color:#c4d7d1;text-decoration:none;font-size:13px;font-weight:650;line-height:2.05}
  .mkt .vfoot a:hover{color:#fff}
  .mkt .vfoot-social{display:flex;gap:10px;margin-top:18px}
  .mkt .vfoot-social a{width:34px;height:34px;border:1px solid rgba(255,255,255,.18);border-radius:50%;display:grid;place-items:center;line-height:1;color:#fff;font-weight:950;text-transform:uppercase}
  .mkt .vfoot-locale{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;color:#fff;font-size:12px;font-weight:850}
  .mkt .vfoot-locale span{border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:7px 10px;background:rgba(255,255,255,.04)}
  .mkt .vfoot-bottom{border-top:1px solid rgba(255,255,255,.12);padding-top:22px;display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;color:#8fb0a7;font-size:12px;font-weight:750}
  @media(max-width:1050px){.nav-search2{display:none}}
  @media(max-width:880px){.vfoot-top,.mkt .vfoot-top{align-items:flex-start;flex-direction:column}.vfoot-cols,.mkt .vfoot-cols{grid-template-columns:1fr 1fr}}
  @media(max-width:860px){.nav-links{display:none}}
  @media(max-width:640px){.topbar,.topbar .wrap,.site-nav,.site-nav .wrap,.nav-search2{font-size:15.5px;line-height:1.55}}
  @media(max-width:560px){.nav-cta .bolt{display:none}.vfoot,.mkt .vfoot{padding-top:42px}.vfoot-inner,.mkt .vfoot-inner{padding:0 18px}.vfoot-cols,.mkt .vfoot-cols{grid-template-columns:1fr!important;gap:24px}.vfoot-bottom,.mkt .vfoot-bottom{display:block}.vfoot-bottom span,.mkt .vfoot-bottom span{display:block;margin-top:8px}}
</style>`;

const homeResponsiveCss = String.raw`<style id="visto-home-responsive">
  @media(max-width:900px){
    body{overflow-x:hidden}
    .hero-zone,.mkt{overflow:hidden}
    .hz-inner{grid-template-columns:1fr!important;gap:24px!important}
    .hero-zone .hz-img,.hz-img{min-height:auto!important;width:100%!important;margin:18px auto 0!important;overflow:hidden}
    .hz-img .senor,.hero-zone .senor{position:relative!important;right:auto!important;left:auto!important;top:auto!important;bottom:auto!important;width:min(72vw,260px)!important;height:auto!important;max-width:100%!important;margin:0 auto!important;display:block!important}
    .hero-calc{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;width:min(100%,320px)!important;margin:-16px auto 0!important;box-sizing:border-box}
    .hero-note{display:none!important}
  }
  @media(max-width:980px){
    .mkt .fcards{grid-template-columns:1fr 1fr!important}
    .mkt .crit-in,.mkt .datos-in,.mkt .green-in,.mkt .azul-grid,.mkt .proc-split{grid-template-columns:1fr!important}
    .mkt .crit-cards,.mkt .datos-grid,.mkt .tcards,.mkt .azul-r,.mkt .green-r{grid-template-columns:1fr 1fr!important}
    .mkt .azul-stack,.mkt .pcard{display:none!important}
  }
  @media(max-width:560px){
    .mkt .fcards,.mkt .tcards,.mkt .crit-cards,.mkt .datos-grid,.mkt .azul-r,.mkt .green-r{grid-template-columns:1fr!important}
    .mkt .fcard,.mkt .tcard,.mkt .crit-card,.mkt .dcard{width:100%!important;max-width:100%!important;box-sizing:border-box!important}
  }
</style>`;

const replacements = [
  [/home-C-mezcla(?: \(\d+\))?\.html/g, "home.html"],
  [/index\.html/g, "home.html"],
  [/sectores-visto\.html/g, "sectores.html"],
  [/sector-fontaneros-visto\.html/g, "sector.html"],
  [/fontaneros-madrid-visto\.html/g, "fontaneros-madrid.html"],
  [/nuestros-resultados-visto\.html/g, "nuestros-resultados.html"],
  [/nuestros-resultados\.html/g, "nuestros-resultados.html"],
  [/sector-fontaneros\.html/g, "sector.html"],
  [/metodo-visto\.html/g, "metodo.html"],
  [/metodo-fase1-visto\.html/g, "metodo-fase1.html"],
  [/metodo_fase1\.html/g, "metodo-fase1.html"],
  [/metodo-fase2\.html/g, "metodo-fase2.html"],
  [/metodo-fase3\.html/g, "metodo-fase3.html"],
  [/metodo-fase4\.html/g, "metodo-fase4.html"],
  [/paso-categoria-visto\.html/g, "paso-categoria.html"],
  [/paso_categoria\.html/g, "paso-categoria.html"],
  [/sector-ciudad\.html/g, "sector.html"],
  [/sector-(?!fontaneros\b)[a-z0-9-]+\.html/g, "#"],
  [/diagnostico\.html/g, "home.html#contacto"],
  [/Home_estilo_marketplace___RankeaLocal[^"]*\.html/g, "home.html"],
  [/font-family:Inter,-apple-system,'Segoe UI',Arial,sans-serif/g, 'font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif'],
  [/font-family:Inter,Arial,sans-serif/g, 'font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif'],
  [/font-family:'Inter',sans-serif/g, 'font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif'],
  [/font-family:Inter/g, 'font-family:"Plus Jakarta Sans"'],
  [/#5624D0/gi, "#12A97E"],
  [/#4318A8/gi, "#0A5638"],
  [/#3d2a6b/gi, "#12463B"],
  [/#6b4bd6/gi, "#0E8A6B"],
  [/#1B3CC4/gi, "#0A5638"],
  [/#2B59FF/gi, "#12A97E"],
  [/#3D8BFF/gi, "#F2C94C"],
  [/#DCE6FF/gi, "#EAF6EF"],
  [/#eaf1ff/gi, "#EAF6EF"],
  [/#ece4fb/gi, "#EAF6EF"],
  [/#9a8fb5/gi, "#7f968e"],
  [/#9aa6b6/gi, "#8aa79a"],
  [/#e7f1ff/gi, "#EAF6EF"],
  [/#f8fbff/gi, "#F4FBF7"],
  [/#f5f3ff/gi, "#EAF6EF"],
  [/#ede9fe/gi, "#EAF6EF"],
  [/#ddd6fe/gi, "#CBEBDD"],
  [/rgba\(109,\s*40,\s*210,\s*([^)]+)\)/gi, "rgba(18,169,126,$1)"],
  [/rgba\(20,\s*6,\s*45,\s*([^)]+)\)/gi, "rgba(14,46,42,$1)"],
  [/purple/g, "green"],
  [/Purple/g, "Green"],
  [/blue/g, "green"],
  [/Blue/g, "Green"],
  [/indigo/g, "charcoal"],
  [/Indigo/g, "Charcoal"],
];

function normalizeFont(html) {
  html = html.replace(
    /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:[^"]+"\s+rel="stylesheet">/g,
    `<link href="${fontHref}" rel="stylesheet">`,
  );
  html = html.replace(
    /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Plus\+Jakarta\+Sans:[^"]+"\s+rel="stylesheet">/g,
    `<link href="${fontHref}" rel="stylesheet">`,
  );
  if (!html.includes(fontHref)) {
    html = html.replace("</head>", `  <link href="${fontHref}" rel="stylesheet">\n</head>`);
  }
  return html;
}

function replaceShell(html) {
  html = html.replace(/\s*(?:<!-- PROMO -->\s*)?<div class="promo">[\s\S]*?<\/div>\s*/g, "\n");
  html = html.replace(/<div class="topbar">[\s\S]*?<\/header>/, commonHeader);
  html = html.replace(/<header class="top">[\s\S]*?<\/header>/, commonHeader);
  html = html.replace(/<footer class="vfoot">[\s\S]*?<\/footer>/, commonFooter);
  html = html.replace(/<footer class="foot">[\s\S]*?<\/footer>/, commonFooter);
  return html;
}

function normalizeLinksAndPalette(html) {
  for (const [from, to] of replacements) html = html.replace(from, to);
  return html;
}

function connectNewPages(html, destName) {
  if (destName === "home.html") {
    html = html.replace(
      /if\(go\)go\.addEventListener\("click",function\(\)\{window\.location\.hash="#resultado";\}\);/,
      `if(go)go.addEventListener("click",function(){var oficio=(selO&&selO.value)||"";var ciudad=(selC&&selC.value)||"";if(/fontan/i.test(oficio)&&ciudad==="Madrid"){window.location.href="fontaneros-madrid.html";return;}window.location.hash="#resultado";});`,
    );
  }

  if (destName === "sector.html") {
    html = html.replace(
      /window\.location\.href='home\.html#contacto\?oficio=Fontaneros&ciudad='\+encodeURIComponent\(c\);/,
      `if(c==="Madrid"){window.location.href='fontaneros-madrid.html';return;}window.location.href='home.html#contacto?oficio=Fontaneros&ciudad='+encodeURIComponent(c);`,
    );
  }

  return html;
}

function normalize(html, destName) {
  html = normalizeFont(html);
  html = normalizeLinksAndPalette(html);
  html = replaceShell(html);
  html = connectNewPages(html, destName);

  if (!html.includes('id="visto-common-shell"')) {
    html = html.replace("</head>", `${commonShellCss}\n</head>`);
  }
  if (destName === "home.html" && !html.includes('id="visto-home-responsive"')) {
    html = html.replace("</head>", `${homeResponsiveCss}\n</head>`);
  }

  return html;
}

const methodGeneratedCss = String.raw`<style id="visto-method-generated">
  .lc-tasks{margin:12px 0 0;padding:0;list-style:none;display:grid;gap:7px}
  .lc-tasks li{position:relative;padding-left:17px;color:#4f615b;font-size:13px;line-height:1.45}
  .lc-tasks li:before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border-radius:50%;background:#12A97E}
  .phase-note{font-size:13px;color:#63736d;margin-top:12px;font-weight:700}
  .lc-side .go[href="#"]{color:#7f968e;border-color:#e3e8e5}
  @media(max-width:720px){.lc-tasks li{font-size:12.5px}.list-card{align-items:start}}
</style>`;

const stepGeneratedCss = String.raw`<style id="visto-step-generated">
  :root{--green:#12A97E;--green2:#0E8A6B;--ink:#1c1d1f;--soft:#63736d;--line:#e3e8e5;--bg2:#f7f9fa;--charcoal:#2d2f31}
  *{box-sizing:border-box}
  body{margin:0;color:var(--ink);background:#fff;line-height:1.45}
  a{color:inherit;text-decoration:none}
  .step-hero{background:#2d2f31;color:#fff;padding:34px 0 40px}
  .step-hero .inner{max-width:760px;margin-left:max(24px,calc((100% - 1340px)/2 + 24px));padding:0 24px}
  .crumbs{font-size:13px;color:#9FCFB6;margin-bottom:16px}
  .crumbs a{color:#9FCFB6;font-weight:800;text-decoration:underline}
  .step-hero h1{font-size:34px;line-height:1.14;letter-spacing:-.02em;margin:0 0 12px;max-width:680px}
  .step-hero .lead{font-size:17px;color:#e3e3e6;max-width:660px;margin:0 0 16px}
  .hero-meta{display:flex;gap:14px 22px;flex-wrap:wrap;font-size:13px;color:#B9D3CA;font-weight:700}
  .badge{background:#12463B;color:#DCEDE4;font-size:12px;font-weight:850;padding:5px 10px;border-radius:6px}
  .by{margin-top:12px;font-size:13px;color:#d1d7dc}.by b{color:#fff}
  .step-wrap{max-width:1340px;margin:0 auto;padding:0 24px}
  .step-shell{display:flex;gap:44px;align-items:flex-start}
  .step-content{flex:1;min-width:0;max-width:760px;padding-top:34px}
  .step-card{position:sticky;top:88px;order:1;margin-top:-230px;margin-left:auto;width:340px;flex:none;background:#fff;border:1px solid #d1d7dc;box-shadow:0 10px 30px -8px rgba(0,0,0,.25);z-index:2}
  .step-card .pic{height:158px;overflow:hidden;border-bottom:1px solid var(--line);background:linear-gradient(135deg,#0A2E28,#0E8A6B)}
  .step-card .pic img{width:100%;height:100%;object-fit:cover}
  .step-card .pad{padding:22px}
  .step-card h4{font-size:15px;margin:0 0 10px}
  .fact-list{display:grid;gap:12px;margin:0 0 16px}
  .fact{display:flex;gap:10px;align-items:flex-start;color:#3d4146;font-size:13px;font-weight:650;line-height:1.45}
  .fact b{display:block;color:var(--ink);font-size:13.5px;margin-bottom:1px}
  .fact:before{content:"";width:8px;height:8px;border-radius:50%;background:#12A97E;margin-top:6px;flex:none}
  .btn{display:inline-flex;align-items:center;justify-content:center;font-weight:850;border:1px solid #12A97E;height:42px;padding:0 14px;border-radius:8px;color:#12A97E;background:#fff;font-size:14px;white-space:nowrap}
  .btn:hover{background:#EAF6EF}
  .btn.block{width:100%;height:48px}
  .block{border:1px solid var(--line);border-radius:8px;padding:24px;margin-bottom:28px}
  .block h2,.h-sec{font-size:24px;letter-spacing:-.01em;margin:0 0 14px}
  .learn{display:grid;grid-template-columns:1fr 1fr;gap:12px 22px}
  .learn div{font-size:14px;color:#2d2f31;display:flex;gap:10px;line-height:1.45}
  .learn div:before{content:"✓";color:#1c1d1f;font-weight:900;flex:none}
  .p-sec{font-size:15px;color:#3d4146;line-height:1.65;margin:0 0 24px;max-width:680px}
  .compare3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}
  .cmp{border:1px solid var(--line);border-radius:8px;padding:18px;background:#fff}
  .cmp.a{border-top:5px solid #e54864}.cmp.b{border-top:5px solid #1aa87d}.cmp.c{border-top:5px solid #12A97E}
  .cmp h3{font-size:15px;margin:0 0 8px}.cmp p{font-size:13px;color:var(--soft);line-height:1.55;margin:0}
  .curr-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px}
  .curr-head h2{font-size:24px;margin:0}.curr-head span{font-size:13px;color:var(--soft)}
  .curr{border:1px solid var(--line);border-radius:8px;overflow:hidden;margin-bottom:28px}
  .acc-top{background:var(--bg2);padding:14px 18px;font-weight:850;font-size:15px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;gap:16px}
  .acc-top span{color:var(--soft);font-weight:650;font-size:13px}
  .curr .acc{border-bottom:1px solid #ececec}.curr .acc:last-child{border-bottom:0}
  .curr summary{display:flex;align-items:center;gap:14px;padding:13px 18px;font-size:14px;cursor:pointer;list-style:none}
  .curr summary::-webkit-details-marker{display:none}
  .curr summary .n{width:26px;height:26px;border-radius:50%;background:#EAF6EF;color:#0E8A6B;font-weight:850;font-size:12px;display:grid;place-items:center;flex:none}
  .curr summary .acc-t{flex:1;font-weight:700}.curr summary .chev{color:var(--soft);font-size:15px}
  .curr .acc-body{padding:0 18px 15px 58px;font-size:13.5px;color:var(--soft);line-height:1.55}
  .pills{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px}
  .pill{border:1px solid var(--line);border-radius:6px;background:var(--bg2);font-size:13px;font-weight:750;padding:9px 14px;color:#2d2f31}
  .pill:hover{background:#EAF6EF;border-color:#9FCFB6;color:#0E8A6B}
  .pasonav{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:28px 0 14px}
  .pn{display:flex;flex-direction:column;gap:3px;border:1px solid var(--line);border-radius:8px;padding:14px 16px;transition:border-color .15s,box-shadow .15s}
  .pn:hover{border-color:#9FCFB6;box-shadow:0 6px 16px -10px rgba(0,0,0,.2)}
  .pn.next{text-align:right;align-items:flex-end}
  .pn-dir{font-size:12px;font-weight:800;color:#12A97E}.pn-t{font-size:14px;font-weight:850;color:var(--ink)}
  @media(max-width:1180px){.step-shell{flex-direction:column}.step-card{position:static;order:-1;margin:0 auto 28px;width:auto;max-width:760px}.step-content{padding-top:24px}}
  @media(max-width:760px){.step-hero .inner,.step-content,.step-card{max-width:100%}.step-hero h1{font-size:26px}.learn,.compare3{grid-template-columns:1fr}.pasonav{grid-template-columns:1fr}}
</style>`;

const homeRedesignCss = String.raw`<style id="visto-home-redesign">
  :root{--green:#12A97E;--green2:#0E8A6B;--deep:#06241d;--ink:#17231f;--soft:#63736d;--line:#e3e8e5;--bg:#f6faf8;--gold:#F2C94C}
  *{box-sizing:border-box}
  body{margin:0;background:#fff;color:var(--ink);font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif}
  a{text-decoration:none;color:inherit}
  .rd-wrap{max-width:1180px;margin:0 auto;padding:0 22px}
  .rd-section{padding:70px 0}
  .rd-k{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.07em;color:var(--green);margin-bottom:10px}
  .rd-h2{font-size:36px;line-height:1.08;letter-spacing:-.035em;margin:0;color:var(--ink)}
  .rd-sub{font-size:16px;line-height:1.7;color:var(--soft);max-width:680px;margin:14px 0 0}
  .rd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:50px;padding:0 20px;border-radius:10px;background:var(--green);color:#fff;font-weight:900;border:0;box-shadow:0 14px 28px -20px rgba(18,169,126,.8)}
  .rd-btn:hover{background:var(--green2)}
  .rd-btn.alt{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:none}
  .rd-hero{background:radial-gradient(100% 80% at 86% 0%,#EAF6EF 0%,#fff 54%);padding:44px 0 54px;border-bottom:1px solid var(--line)}
  .rd-hero-grid{display:grid;grid-template-columns:minmax(0,1.06fr) 430px;gap:48px;align-items:center}
  .rd-pill{display:inline-flex;align-items:center;gap:8px;background:#EAF6EF;color:#0E6F57;border:1px solid #CDEAE0;border-radius:999px;padding:8px 12px;font-size:12px;font-weight:900;margin-bottom:18px}
  .rd-hero h1{font-size:58px;line-height:.98;letter-spacing:-.06em;margin:0;max-width:720px}
  .rd-hero h1 span{color:var(--green)}
  .rd-lead{font-size:18px;line-height:1.7;color:#40534d;max-width:650px;margin:20px 0 24px}
  .rd-search{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:8px;box-shadow:0 22px 48px -34px rgba(6,40,30,.55);max-width:790px}
  .rd-field{border-right:1px solid #edf1ee;padding:10px 14px}
  .rd-field:last-of-type{border-right:0}
  .rd-field span{display:block;color:var(--green);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px}
  .rd-field b{font-size:16px}
  .rd-search .rd-btn{height:54px;white-space:nowrap}
  .rd-equation{margin-top:15px;color:#6b7c76;font-weight:750;font-size:13px}
  .rd-equation b{color:var(--ink)}
  .rd-panel{background:#092a22;color:#fff;border-radius:18px;padding:22px;box-shadow:0 28px 70px -40px rgba(6,40,30,.7)}
  .rd-side{display:grid;gap:14px}
  .rd-photo{position:relative;min-height:255px;border-radius:20px;overflow:hidden;background:#dfe9e4;box-shadow:0 22px 52px -34px rgba(6,40,30,.7)}
  .rd-photo img{width:100%;height:100%;object-fit:cover;display:block}
  .rd-photo-note{position:absolute;left:16px;right:16px;bottom:16px;background:rgba(6,26,21,.88);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:14px 16px;color:#fff}
  .rd-photo-note b{display:block;font-size:17px;margin-bottom:3px}
  .rd-photo-note span{display:block;font-size:12px;color:#c7ddd5;line-height:1.45}
  .rd-panel-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;margin-bottom:18px}
  .rd-panel h3{margin:0;font-size:20px;letter-spacing:-.02em}
  .rd-panel small{color:#9FCFB6;font-weight:800}
  .rd-tag{background:rgba(242,201,76,.15);color:#F8DB75;border:1px solid rgba(242,201,76,.34);border-radius:999px;font-size:11px;font-weight:900;padding:7px 10px;white-space:nowrap}
  .rd-money{background:#fff;color:var(--ink);border-radius:14px;padding:18px;margin-bottom:12px}
  .rd-money span{display:block;color:#667973;font-size:12px;font-weight:850;margin-bottom:5px}
  .rd-money strong{font-size:36px;letter-spacing:-.045em;line-height:1}
  .rd-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .rd-metric{border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:14px;background:rgba(255,255,255,.05)}
  .rd-metric b{font-size:21px;display:block;color:#fff}
  .rd-metric span{font-size:12px;color:#a8c1ba}
  .rd-note{font-size:12px;color:#a8c1ba;line-height:1.55;margin-top:14px}
  .rd-strip{background:#08271f;color:#d7e9e2;padding:22px 0}
  .rd-strip-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .rd-strip-item{border-left:1px solid rgba(255,255,255,.16);padding-left:16px}
  .rd-strip-item b{display:block;color:#fff;font-size:20px;letter-spacing:-.02em}
  .rd-strip-item span{font-size:12px;color:#a8c1ba;font-weight:750}
  .rd-city{background:var(--bg)}
  .rd-head-row{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:26px}
  .rd-table{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 18px 42px -34px rgba(6,40,30,.5)}
  .rd-row{display:grid;grid-template-columns:1.1fr .9fr .8fr 1fr .9fr;gap:0;border-bottom:1px solid var(--line)}
  .rd-row:last-child{border-bottom:0}
  .rd-cell{padding:17px 18px;border-right:1px solid #eef2f0;font-size:14px;color:#40534d}
  .rd-cell:last-child{border-right:0}
  .rd-row.head .rd-cell{font-size:11px;text-transform:uppercase;letter-spacing:.06em;font-weight:900;color:#7a8e87;background:#fbfdfc}
  .rd-cell b{display:block;color:var(--ink);font-size:16px}
  .rd-opp{display:inline-flex;align-items:center;border-radius:999px;padding:6px 10px;background:#EAF6EF;color:#0E6F57;font-size:12px;font-weight:900}
  .rd-services{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:30px}
  .rd-service{border:1px solid var(--line);border-radius:14px;padding:20px;background:#fff}
  .rd-service .num{font-size:12px;font-weight:900;color:var(--green);margin-bottom:12px}
  .rd-service h3{margin:0 0 8px;font-size:18px;letter-spacing:-.015em}
  .rd-service p{margin:0;color:var(--soft);line-height:1.6;font-size:14px}
  .rd-method{background:#fff}
  .rd-method-grid{display:grid;grid-template-columns:340px 1fr;gap:36px;align-items:start}
  .rd-method-aside{position:sticky;top:94px;background:#0a2b23;color:#fff;border-radius:18px;padding:24px}
  .rd-method-aside h2{font-size:32px;line-height:1.08;letter-spacing:-.04em;margin:0 0 14px}
  .rd-method-aside p{color:#b9d3ca;line-height:1.65;margin:0 0 20px}
  .rd-steps{display:grid;gap:14px}
  .rd-step{display:grid;grid-template-columns:74px 1fr 150px;gap:18px;align-items:center;border:1px solid var(--line);border-radius:14px;background:#fff;padding:18px}
  .rd-step-n{width:54px;height:54px;border-radius:14px;background:#EAF6EF;color:var(--green);display:grid;place-items:center;font-size:18px;font-weight:950}
  .rd-step-img{width:74px;height:64px;border-radius:12px;background:#e8f1ed center/cover no-repeat;box-shadow:inset 0 0 0 1px rgba(0,0,0,.04)}
  .rd-step h3{margin:0 0 6px;font-size:19px;letter-spacing:-.02em}
  .rd-step p{margin:0;color:var(--soft);line-height:1.55;font-size:14px}
  .rd-step-m{font-size:12px;font-weight:900;color:#0E6F57;background:#EAF6EF;border-radius:999px;padding:8px 10px;text-align:center}
  .rd-month{background:#f9fbfa;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .rd-month-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:28px}
  .rd-month-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px}
  .rd-month-card b{display:block;font-size:17px;margin-bottom:8px}
  .rd-month-card p{margin:0;color:var(--soft);line-height:1.6;font-size:14px}
  .rd-proof{display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:stretch}
  .rd-proof-card{border-radius:18px;padding:28px;border:1px solid var(--line)}
  .rd-proof-card.dark{background:#092a22;color:#fff;border-color:#092a22}
  .rd-proof-card.photo{padding:0;overflow:hidden;background:#fff}
  .rd-proof-card.photo img{width:100%;height:230px;object-fit:cover;display:block}
  .rd-proof-pad{padding:24px 26px}
  .rd-proof-card h2{font-size:30px;line-height:1.1;letter-spacing:-.035em;margin:0 0 14px}
  .rd-proof-card p{line-height:1.7;color:#52665f;margin:0}
  .rd-proof-card.dark p{color:#b9d3ca}
  .rd-list{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:10px}
  .rd-list li{display:flex;gap:10px;color:#d7e9e2;font-weight:750;font-size:14px}
  .rd-list li:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--gold);margin-top:7px;flex:none}
  .rd-final{background:radial-gradient(120% 130% at 80% -20%,#145043 0%,#0E2E2A 44%,#071d18 100%);color:#fff;text-align:center;padding:70px 0}
  .rd-final h2{font-size:42px;line-height:1.05;letter-spacing:-.045em;margin:0 auto 16px;max-width:760px}
  .rd-final p{color:#b9d3ca;line-height:1.7;margin:0 auto 24px;max-width:620px}
  .rd-final .rd-btn.alt{border-color:rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:#fff}
  .rd-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
  @media(max-width:980px){.rd-hero-grid,.rd-method-grid,.rd-proof{grid-template-columns:1fr}.rd-side{max-width:560px}.rd-panel{max-width:560px}.rd-method-aside{position:static}.rd-row{grid-template-columns:1fr 1fr}.rd-row.head{display:none}.rd-cell{border-bottom:1px solid #eef2f0}.rd-services,.rd-month-grid,.rd-strip-grid{grid-template-columns:1fr 1fr}.rd-step{grid-template-columns:74px 1fr}}
  @media(max-width:640px){.rd-section{padding:48px 0}.rd-hero h1{font-size:39px}.rd-h2{font-size:29px}.rd-search{grid-template-columns:1fr}.rd-field{border-right:0;border-bottom:1px solid #edf1ee}.rd-strip-grid,.rd-services,.rd-month-grid{grid-template-columns:1fr}.rd-metrics{grid-template-columns:1fr}.rd-step{grid-template-columns:1fr}.rd-step-img{width:100%;height:150px}.rd-step-m{text-align:left}.rd-head-row{display:block}.rd-final h2{font-size:32px}}
</style>`;

const actionMeta = {
  1: {
    dest: "metodo-fase1.html",
    label: "Identidad",
    topics: ["Propiedad y verificacion", "Categorias con intencion", "NAP coherente", "Zona de servicio", "Descripcion SEO local", "Atributos", "Schema y rastreo"],
    objectives: ["Ficha en propiedad", "Categorias con intencion", "Entidad coherente", "Web que refuerza"],
  },
  2: {
    dest: "metodo-fase2.html",
    label: "Atractivo",
    topics: ["Servicios claros", "Fotos reales", "Galeria de trabajos", "Videos cortos", "Precios orientativos", "Posts semanales", "Web alineada"],
    objectives: ["Ficha que vende", "Prueba visual real", "Servicios entendibles", "Propuesta de valor"],
  },
  3: {
    dest: "metodo-fase3.html",
    label: "Confianza",
    topics: ["Resenas nuevas", "Respuestas cuidadas", "Q&A", "Reputacion externa", "Senales de confianza", "Garantias", "Testimonios"],
    objectives: ["Mas credibilidad", "Resenas gestionadas", "Dudas resueltas", "Reputacion monitorizada"],
  },
  4: {
    dest: "metodo-fase4.html",
    label: "Conversion",
    topics: ["Llamada directa", "WhatsApp", "Formulario", "Como llegar", "Web movil", "Eventos", "Informes"],
    objectives: ["Mas contactos", "Menos friccion", "Medicion fiable", "Mejora continua"],
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseMethodMarkdown() {
  const raw = fs.readFileSync(methodMarkdownPath, "utf8").replace(/\r\n/g, "\n");
  const sections = raw.split(/\n---\n/);
  const actions = [];

  for (const rawSection of sections) {
    const section = rawSection.trim();
    const header = section.match(/^## Acci[oó]n\s+(\d+)\s+[—-]\s+(.+?)\s+·\s+(.+?)\n/i);
    if (!header) continue;

    const number = Number(header[1]);
    const name = header[2].trim();
    const result = header[3].trim();
    const description = section.match(/\n\*([^*]+)\*\n/)?.[1].trim() ?? "";
    const steps = [];
    const stepSections = section.split(/\n###\s+/).slice(1);

    for (const stepSection of stepSections) {
      const [stepHeader, ...bodyLines] = stepSection.split("\n");
      const stepMatch = stepHeader.match(/^(\d{2})\s+·\s+(.+?)$/);
      if (!stepMatch) continue;

      const tasks = bodyLines
        .map((line) => line.trim())
        .filter((line) => line.startsWith("- "))
        .map((line) => line.slice(2));

      steps.push({
        number: stepMatch[1],
        title: stepMatch[2].trim(),
        tasks,
      });
    }

    actions.push({
      number,
      name,
      result,
      description,
      steps,
      taskCount: steps.reduce((total, step) => total + step.tasks.length, 0),
    });
  }

  if (actions.length !== 4) {
    throw new Error(`Expected 4 method actions in ${methodMarkdownPath}, found ${actions.length}`);
  }

  return actions;
}

function extractMethodImages(templateHtml) {
  const sources = [...templateHtml.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
  return {
    hero: sources[0] ?? "",
    objective: sources.slice(1, 5),
    banner: sources[sources.length - 1] ?? sources[0] ?? "",
  };
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseYamlValue(rawValue) {
  const value = String(rawValue ?? "").trim();
  if (value === "") return "";
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function splitInlineYamlMap(value) {
  const parts = [];
  let current = "";
  let quote = "";

  for (const char of value) {
    if ((char === '"' || char === "'") && !quote) {
      quote = char;
      current += char;
      continue;
    }
    if (char === quote) {
      quote = "";
      current += char;
      continue;
    }
    if (char === "," && !quote) {
      parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseInlineYamlMap(rawValue) {
  const inner = String(rawValue).trim().replace(/^\{\s*/, "").replace(/\s*\}$/, "");
  const result = {};

  for (const part of splitInlineYamlMap(inner)) {
    const match = part.match(/^([a-zA-Z_]+):\s*([\s\S]*)$/);
    if (!match) continue;
    result[match[1]] = parseYamlValue(match[2]);
  }

  return result;
}

function parseSectorYaml() {
  const raw = fs.readFileSync(sectorYamlPath, "utf8").replace(/\r\n/g, "\n");
  const sectors = [];
  let current = null;
  let section = "";
  let profile = null;

  function finishProfile() {
    if (profile && current) current.perfiles.push(profile);
    profile = null;
  }

  for (const line of raw.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const sectorMatch = line.match(/^  - slug:\s*(.+)$/);
    if (sectorMatch) {
      finishProfile();
      current = {
        slug: parseYamlValue(sectorMatch[1]),
        oficio: "",
        categoria: "",
        hero: {},
        datos: {},
        se_busca: [],
        mejor_pagado: [],
        mercado: [],
        frentes: {},
        perfiles: [],
      };
      sectors.push(current);
      section = "";
      continue;
    }

    if (!current) continue;

    const topMatch = line.match(/^    ([a-zA-Z_]+):(?:\s*(.*))?$/);
    if (topMatch) {
      finishProfile();
      const [, key, rawValue = ""] = topMatch;
      if (["hero", "datos", "se_busca", "mejor_pagado", "mercado", "frentes", "perfiles"].includes(key)) {
        section = key;
      } else {
        current[key] = parseYamlValue(rawValue);
        section = "";
      }
      continue;
    }

    if (["hero", "datos", "frentes"].includes(section)) {
      const nestedMatch = line.match(/^      ([a-zA-Z0-9_]+):\s*([\s\S]+)$/);
      if (nestedMatch) current[section][nestedMatch[1]] = parseYamlValue(nestedMatch[2]);
      continue;
    }

    if (section === "se_busca") {
      const itemMatch = line.match(/^      -\s*([\s\S]+)$/);
      if (itemMatch) current.se_busca.push(parseYamlValue(itemMatch[1]));
      continue;
    }

    if (section === "mejor_pagado" || section === "mercado") {
      const itemMatch = line.match(/^      -\s*(\{[\s\S]+\})$/);
      if (itemMatch) current[section].push(parseInlineYamlMap(itemMatch[1]));
      continue;
    }

    if (section === "perfiles") {
      const profileStart = line.match(/^      - nombre:\s*([\s\S]+)$/);
      if (profileStart) {
        finishProfile();
        profile = { nombre: parseYamlValue(profileStart[1]), texto: "" };
        continue;
      }
      const profileText = line.match(/^        texto:\s*([\s\S]+)$/);
      if (profileText && profile) profile.texto = parseYamlValue(profileText[1]);
    }
  }

  finishProfile();

  if (!sectors.length) {
    throw new Error(`No sectors found in ${sectorYamlPath}`);
  }

  return sectors;
}

function sectorPageName(sector) {
  return sector.slug === "fontaneros" ? "sector.html" : `sector-${sector.slug}.html`;
}

function formatEuro(value) {
  return `${Number(value || 0).toLocaleString("es-ES")} &euro;`;
}

function formatInteger(value) {
  return Number(value || 0).toLocaleString("es-ES");
}

function sectorMarketLabel(sector) {
  return (sector.hero?.eyebrow?.split("·")[0] || sector.oficio || "tu sector").trim().toLowerCase();
}

function renderSectorTitle(title) {
  const clean = String(title || "");
  const match = clean.match(/^(.*?)(Y qu[eé]datelo\.?)$/i);
  if (!match) return escapeHtml(clean);
  return `${escapeHtml(match[1].trim())} <span>${escapeHtml(match[2])}</span>`;
}

function searchIcon() {
  return String.raw`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>`;
}

function frontIcon(key) {
  const icons = {
    ficha: String.raw`<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>`,
    web: String.raw`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>`,
    resenas: String.raw`<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z"/>`,
    contenido: String.raw`<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>`,
    ia: String.raw`<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.5A8 8 0 1121 12z"/><path d="M12 8l.7 1.8L14.5 10l-1.8.7L12 12.5l-.7-1.8L9.5 10l1.8-.5z"/>`,
    medicion: String.raw`<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>`,
  };
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[key]}</svg>`;
}

function buildServiceSearchGrid(items) {
  return items
    .map((item) => `<a class="svc"><span class="svc-ic">${searchIcon()}</span>${escapeHtml(item)}</a>`)
    .join("");
}

function buildPaidChart(items) {
  const maxTicket = Math.max(...items.map((item) => Number(item.ticket || 0)), 1);
  return items
    .map((item) => {
      const width = Math.max(3, Math.round((Number(item.ticket || 0) / maxTicket) * 100));
      return `<div class="brow"><span class="bl">${escapeHtml(item.servicio)}</span><span class="btrack"><i style="width:${width}%"></i></span><span class="bv">${formatEuro(item.ticket)}</span></div>`;
    })
    .join("");
}

function buildMarketCards(sector) {
  return sector.mercado
    .map(
      (item) =>
        `<a class="citycard" href="${sectorPageName(sector)}#servicios"><div class="city-top"><span class="cn">${escapeHtml(item.servicio)}</span><span class="cm">${escapeHtml(item.tag)}</span></div><div class="city-stats"><div><b>${formatEuro(item.ticket)}</b><span>ticket medio</span></div><div><b>${formatInteger(item.busquedas)}</b><span>b&uacute;squedas/mes</span></div></div></a>`,
    )
    .join("");
}

function buildFronts(sector) {
  const items = [
    ["ficha", "Paso 01", "Tu ficha de Google", "Tu ficha decide si sales en el mapa o te quedas fuera del Top 3.", "Google te entiende y te muestra mejor"],
    ["web", "Paso 02", "Tu web", "Tu web tiene un solo trabajo: convertir la visita en una llamada.", "El que entra, llama"],
    ["resenas", "Paso 03", "Rese&ntilde;as y reputaci&oacute;n", "Las rese&ntilde;as son lo que el cliente compara justo antes de llamar.", "Confianza que te elige frente al de al lado"],
    ["contenido", "Paso 04", "Contenido local", "Una p&aacute;gina por cada servicio y cada zona en la que quieres salir.", "Apareces en decenas de b&uacute;squedas, no en una"],
    ["ia", "Paso 05", "Presencia en IA", "Que cuando pregunten a una IA por tu oficio, salgas t&uacute;.", "Est&aacute;s donde tu competencia a&uacute;n no llega"],
    ["medicion", "Paso 06", "Medici&oacute;n", "Cada mes, los n&uacute;meros reales de qu&eacute; te est&aacute; trayendo clientes.", "Sabes exactamente qu&eacute; te trae trabajo"],
  ];

  return items
    .map(([key, step, title, lead, result]) => {
      const body = sector.frentes?.[key] || "";
      return `<article class="fr-item" id="fr-${key}"><div class="fr-head"><span class="fr-ic">${frontIcon(key)}</span><div><div class="fr-step">${step}</div><h3>${title}</h3></div></div><p class="fr-lead2">${lead}</p><p>${escapeHtml(body)}</p><div class="fr-res">${result}</div></article>`;
    })
    .join("");
}

function buildBuyerProfiles(sector) {
  return sector.perfiles
    .map((profile) => `<div class="buyer"><div class="buyer-k">${escapeHtml(profile.nombre)}</div><p>${escapeHtml(profile.texto)}</p></div>`)
    .join("");
}

function buildSectorMain(sector) {
  const label = sectorMarketLabel(sector);
  const best = sector.mejor_pagado[0] || {};
  const frequent = sector.mercado[0] || {};

  return String.raw`<main>
  <div class="wrap">
    <div class="scrumbs"><a href="home.html">Visto</a> &rsaquo; <a href="sectores.html">Sectores</a> &rsaquo; <span>${escapeHtml(sector.oficio)}</span></div>
    <div class="hbx hbx-center">
      <div class="hero-copy hc-center">
        <span class="hero-eyebrow">${escapeHtml(sector.hero.eyebrow)}</span>
        <h1>${renderSectorTitle(sector.hero.h1)}</h1>
        <p>${escapeHtml(sector.hero.p)}</p>
        <div class="hero-bar">
          <div class="hb-f"><label>Tu oficio</label><span class="hb-val">${escapeHtml(sector.oficio)}</span></div>
          <div class="hb-f"><label>&iquest;D&oacute;nde trabajas?</label><select id="hm-ci"></select></div>
          <button class="hb-go" id="hm-go" type="button">Ver mi mercado &rarr;</button>
        </div>
        <span class="hero-micro">Gratis &middot; sin compromiso &middot; en 2 minutos</span>
      </div>
    </div>
    <div class="factrow">
      <div class="fact f-green"><span>Lo que m&aacute;s se busca</span><strong>${escapeHtml(sector.datos.mas_buscado)}</strong></div>
      <div class="fact f-dark"><span>Mejor ticket medio</span><strong>${escapeHtml(sector.datos.mejor_ticket)}</strong></div>
      <div class="fact f-soft"><span>M&aacute;s margen</span><strong>${escapeHtml(sector.datos.mas_margen)}</strong></div>
    </div>
  </div>

  <section class="section">
    <div class="wrap">
      <h2 class="s-h2">Lo que se busca en ${escapeHtml(label)}</h2>
      <div class="svc-grid">${buildServiceSearchGrid(sector.se_busca)}</div>
    </div>
  </section>

  <section class="section s-soft">
    <div class="wrap">
      <div class="s-eye">Ticket por servicio</div>
      <h2 class="s-h2 center">Lo que mejor se paga</h2>
      <div class="two-col">
        <div class="chartbox">
          <div class="ct">Ticket medio por tipo de trabajo en ${escapeHtml(label)} (&euro; por servicio)</div>
          ${buildPaidChart(sector.mejor_pagado)}
          <div class="chart-foot">Cifras de ejemplo &middot; pendientes de fuente antes de publicar</div>
        </div>
        <div class="col-text">
          <p>No todos los trabajos pesan igual. ${escapeHtml(best.servicio || "Los servicios de mayor valor")} mueve el ticket m&aacute;s alto, mientras que ${escapeHtml(frequent.servicio || "las b&uacute;squedas m&aacute;s frecuentes")} concentra mucha demanda. Capturar bien tu mercado significa aparecer tanto en las b&uacute;squedas de urgencia como en las de mayor valor.</p>
          <div class="green-links">
            <a href="sectores.html">Ver otros oficios</a>
            <a href="metodo.html">C&oacute;mo trabajamos</a>
            <a href="#servicios">Ver el mercado por servicio</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section s-soft2" id="servicios">
    <div class="wrap">
      <h2 class="s-h2 center">El mercado, servicio a servicio</h2>
      <p class="s-sub">Cu&aacute;nto se busca cada servicio de ${escapeHtml(label)} al mes y cu&aacute;nto se paga por trabajo.</p>
      <div class="cities-grid">${buildMarketCards(sector)}</div>
      <p class="cities-note">Cifras estimadas de ejemplo &middot; b&uacute;squedas mensuales y ticket medio por servicio.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="s-eye" style="text-align:left">C&oacute;mo trabajamos tu oficio</div>
      <h2 class="s-h2">Qu&eacute; trabajamos en ${escapeHtml(label)}</h2>
      <p class="fr-lead">Salir en Google es solo la punta. Trabajamos <b>toda tu presencia</b> para que, cuando alguien de tu zona necesite ${escapeHtml(sector.oficio.toLowerCase())}, te encuentre, se f&iacute;e y te llame a ti. No es un retoque y a otra cosa: es un sistema completo que mantenemos vivo cada mes.</p>

      <div class="fr-layout">
        <div class="fr-content">
          ${buildFronts(sector)}
        </div>
      </div>

      <div class="scale-note"><span class="lr">&orarr;</span> Son <b>4 acciones &middot; 48 pasos &middot; 304 tareas</b> trabaj&aacute;ndose cada mes sobre tu presencia. No un arreglo puntual: un sistema que se mantiene vivo.</div>

      <h3 class="buyer-head">C&oacute;mo busca tu cliente</h3>
      <div class="buyer-row">
        ${buildBuyerProfiles(sector)}
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="s-cta">
        <div>
          <div class="eye">&iquest;Eres ${escapeHtml(sector.oficio.toLowerCase())}?</div>
          <h3>Mira tu mercado, servicio a servicio</h3>
        </div>
        <a href="#servicios" class="s-cta-btn">Ver por servicio &rarr;</a>
      </div>
    </div>
  </section>
</main>`;
}

function sectorContactScript(sector) {
  const oficio = JSON.stringify(sector.oficio);
  if (sector.slug === "fontaneros") {
    return `if(c==="Madrid"){window.location.href='fontaneros-madrid.html';return;}window.location.href='home.html#contacto?oficio='+encodeURIComponent(${oficio})+'&ciudad='+encodeURIComponent(c);`;
  }
  return `window.location.href='home.html#contacto?oficio='+encodeURIComponent(${oficio})+'&ciudad='+encodeURIComponent(c);`;
}

function renderSectorPage(sector, templateHtml) {
  let html = templateHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(sector.oficio)} &middot; Tu sector &middot; Visto</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(sector.hero.p)}">`,
  );
  html = html.replace(/<main>[\s\S]*?<\/main>/, buildSectorMain(sector));
  html = html.replace(
    /if\(c==="Madrid"\)\{window\.location\.href='fontaneros-madrid\.html';return;\}window\.location\.href='home\.html#contacto\?oficio=Fontaneros&ciudad='\+encodeURIComponent\(c\);/,
    sectorContactScript(sector),
  );
  html = html.replace(
    /if\(c==="Madrid"\)\{window\.location\.href='fontaneros-madrid\.html';return;\}window\.location\.href='home\.html#contacto\?oficio='\+encodeURIComponent\("Fontaneros"\)\+'&ciudad='\+encodeURIComponent\(c\);/,
    sectorContactScript(sector),
  );
  return html;
}

function buildSectorDirectoryScript(sectors) {
  const grouped = new Map();
  for (const sector of sectors) {
    if (!grouped.has(sector.categoria)) grouped.set(sector.categoria, []);
    grouped.get(sector.categoria).push({ name: sector.oficio, slug: sector.slug, href: sectorPageName(sector) });
  }

  const dir = [...grouped.entries()].map(([cat, items]) => ({ cat, items }));
  return String.raw`<script>
const DIR=${JSON.stringify(dir)};
const grid=document.getElementById('grid');
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function link(item){return '<a class="item" href="'+item.href+'">'+item.name+'</a>';}
function build(filter=''){
  const needle=norm(filter);
  grid.innerHTML='';let any=false;
  DIR.forEach(c=>{
    const items=c.items.filter(item=>norm(item.name).includes(needle)||norm(c.cat).includes(needle));
    if(items.length){any=true;grid.insertAdjacentHTML('beforeend','<div class="cat"><h3>'+c.cat+'</h3>'+items.map(link).join('')+'</div>');}
  });
  if(!any) grid.innerHTML='<div class="dir-empty">No encontramos ese sector. Prueba con otro t&eacute;rmino.</div>';
}
const _p=new URLSearchParams(location.search);const _q=(_p.get('q')||'').toLowerCase().trim();
const _qi=document.getElementById('q');if(_q)_qi.value=_q;
build(_q);
_qi.addEventListener('input',e=>build(e.target.value.toLowerCase().trim()));
</script>`;
}

function updateSectorDirectory(sectors) {
  const filePath = path.join(outDir, "sectores.html");
  let html = fs.readFileSync(filePath, "utf8");
  html = html.replace(/<script>\s*const DATA_MAP=[\s\S]*?<\/script>/, buildSectorDirectoryScript(sectors));
  fs.writeFileSync(filePath, html, "utf8");
}

function generateSectorPages(sectors) {
  const templatePath = path.join(outDir, "sector.html");
  const templateHtml = fs.readFileSync(templatePath, "utf8");

  for (const sector of sectors) {
    fs.writeFileSync(path.join(outDir, sectorPageName(sector)), renderSectorPage(sector, templateHtml), "utf8");
  }

  updateSectorDirectory(sectors);
}

function extractHomeCssImage(className) {
  const html = fs.readFileSync(updatedHomePath, "utf8");
  const pattern = new RegExp(`\\.${escapeRegExp(className)}\\{background-image:url\\((data:image\\/[^)]+)\\)\\}`);
  return html.match(pattern)?.[1] ?? "";
}

function buildHomeRedesignPage() {
  const heroImage = extractHomeCssImage("img-hero");
  const mapImage = extractHomeCssImage("img-m1");
  const methodImage2 = extractHomeCssImage("img-m2");
  const methodImage3 = extractHomeCssImage("img-m3");
  const methodImage4 = extractHomeCssImage("img-m4");

  return String.raw`<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Visto &middot; Facturaci&oacute;n local por ciudad</title>
<meta name="description" content="Calcula cu&aacute;nta facturaci&oacute;n mueve Google en tu ciudad y qu&eacute; hace Visto cada mes para convertir b&uacute;squedas locales en llamadas.">
<link rel="preconnect" href="https://fonts.googleapis.com/">
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
<link href="${fontHref}" rel="stylesheet">
${homeRedesignCss}
${commonShellCss}
</head>
<body>
${commonHeader}

<main>
  <section class="rd-hero" id="calculadora">
    <div class="rd-wrap rd-hero-grid">
      <div>
        <div class="rd-pill">Facturaci&oacute;n local, no SEO a ciegas</div>
        <h1>Google ya est&aacute; mandando trabajos en tu ciudad. <span>Mira cu&aacute;nto hay en juego.</span></h1>
        <p class="rd-lead">Primero ponemos n&uacute;meros: qu&eacute; busca la gente, qu&eacute; vale cada servicio y qu&eacute; se est&aacute; llevando el Top 3 del mapa. Luego decidimos qu&eacute; tocar para que entren m&aacute;s llamadas buenas.</p>
        <div class="rd-search" aria-label="Calculadora de facturaci&oacute;n local">
          <div class="rd-field"><span>Oficio</span><b>Fontaneros</b></div>
          <div class="rd-field"><span>Ciudad</span><b>Madrid</b></div>
          <a class="rd-btn" href="sector.html">Calcular facturaci&oacute;n local</a>
        </div>
        <div class="rd-equation"><b>b&uacute;squedas/mes</b> x <b>ticket medio</b> x <b>cuota capturable</b> = facturaci&oacute;n local estimada</div>
      </div>

      <div class="rd-side">
        <div class="rd-photo">
          <img src="${heroImage}" alt="Negocio local atendiendo a clientes">
          <div class="rd-photo-note"><b>No va de visitas. Va de trabajos.</b><span>El informe empieza por ciudad, servicio y ticket. Si no hay dinero claro, no se prioriza.</span></div>
        </div>
        <aside class="rd-panel" aria-label="Ejemplo de mercado local">
          <div class="rd-panel-top">
            <div><small>Ejemplo de diagn&oacute;stico</small><h3>Fontaneros en Madrid</h3></div>
            <span class="rd-tag">Top 3 Maps</span>
          </div>
          <div class="rd-money"><span>Mercado mensual estimado</span><strong>3,1M &euro;</strong></div>
          <div class="rd-metrics">
            <div class="rd-metric"><b>42.000</b><span>b&uacute;squedas/mes</span></div>
            <div class="rd-metric"><b>160 &euro;</b><span>ticket medio base</span></div>
            <div class="rd-metric"><b>68%</b><span>clics en Top 3</span></div>
            <div class="rd-metric"><b>90 d&iacute;as</b><span>primer ciclo serio</span></div>
          </div>
          <p class="rd-note">No es una promesa de facturaci&oacute;n. Es una forma de ver d&oacute;nde merece la pena pelear.</p>
        </aside>
      </div>
    </div>
  </section>

  <section class="rd-strip">
    <div class="rd-wrap rd-strip-grid">
      <div class="rd-strip-item"><b>Ciudad primero</b><span>La oportunidad cambia por zona.</span></div>
      <div class="rd-strip-item"><b>Ticket real</b><span>No todos los servicios valen igual.</span></div>
      <div class="rd-strip-item"><b>Top 3</b><span>Ah&iacute; se concentra la demanda.</span></div>
      <div class="rd-strip-item"><b>Llamadas</b><span>La m&eacute;trica que importa.</span></div>
    </div>
  </section>

  <section class="rd-section rd-city" id="facturacion-ciudad">
    <div class="rd-wrap">
      <div class="rd-head-row">
        <div>
          <div class="rd-k">Facturaci&oacute;n por ciudad</div>
          <h2 class="rd-h2">La misma b&uacute;squeda no vale igual en Madrid, Valencia o Sevilla.</h2>
          <p class="rd-sub">Antes de tocar una ficha, decidimos d&oacute;nde est&aacute; la oportunidad: ciudad, servicio, ticket y competencia. As&iacute; se prioriza el trabajo.</p>
        </div>
        <a class="rd-btn alt" href="sectores.html">Ver sectores</a>
      </div>
      <div class="rd-table" role="table" aria-label="Facturaci&oacute;n por ciudad">
        <div class="rd-row head"><div class="rd-cell">Ciudad</div><div class="rd-cell">B&uacute;squedas</div><div class="rd-cell">Ticket</div><div class="rd-cell">Mercado mensual</div><div class="rd-cell">Oportunidad</div></div>
        <div class="rd-row"><div class="rd-cell"><b>Madrid</b>Alta demanda y mucha competencia</div><div class="rd-cell"><b>42.000</b>mes</div><div class="rd-cell"><b>160 &euro;</b>base</div><div class="rd-cell"><b>3,1M &euro;</b>estimado</div><div class="rd-cell"><span class="rd-opp">Alta</span></div></div>
        <div class="rd-row"><div class="rd-cell"><b>Barcelona</b>Mercado grande, muy repartido</div><div class="rd-cell"><b>31.000</b>mes</div><div class="rd-cell"><b>155 &euro;</b>base</div><div class="rd-cell"><b>2,2M &euro;</b>estimado</div><div class="rd-cell"><span class="rd-opp">Alta</span></div></div>
        <div class="rd-row"><div class="rd-cell"><b>Valencia</b>Buen volumen y pelea abordable</div><div class="rd-cell"><b>13.000</b>mes</div><div class="rd-cell"><b>140 &euro;</b>base</div><div class="rd-cell"><b>840K &euro;</b>estimado</div><div class="rd-cell"><span class="rd-opp">Media alta</span></div></div>
        <div class="rd-row"><div class="rd-cell"><b>Sevilla</b>Menos volumen, buena intenci&oacute;n</div><div class="rd-cell"><b>9.800</b>mes</div><div class="rd-cell"><b>135 &euro;</b>base</div><div class="rd-cell"><b>610K &euro;</b>estimado</div><div class="rd-cell"><span class="rd-opp">Media</span></div></div>
      </div>
    </div>
  </section>

  <section class="rd-section">
    <div class="rd-wrap">
      <div class="rd-k">De mercado a llamadas</div>
      <h2 class="rd-h2">No se trabaja todo a la vez. Se empieza por lo que puede acabar en caja.</h2>
      <p class="rd-sub">Un negocio local no necesita m&aacute;s tr&aacute;fico por deporte. Necesita aparecer cuando alguien busca un servicio que paga facturas.</p>
      <div class="rd-services">
        <article class="rd-service"><div class="num">01</div><h3>Servicios con ticket</h3><p>Separamos lo que trae volumen de lo que deja margen. No se trabaja igual una urgencia que una reforma.</p></article>
        <article class="rd-service"><div class="num">02</div><h3>Ciudades que compensan</h3><p>Ordenamos zonas por demanda, competencia y capacidad real de atenderlas. Atacar todo suele diluir el esfuerzo.</p></article>
        <article class="rd-service"><div class="num">03</div><h3>Se&ntilde;ales que dan llamadas</h3><p>Ficha, web, rese&ntilde;as y contenido local apuntan al mismo sitio: que el cliente te elija y llame.</p></article>
      </div>
    </div>
  </section>

  <section class="rd-section rd-method" id="metodo">
    <div class="rd-wrap rd-method-grid">
      <aside class="rd-method-aside">
        <div class="rd-k" style="color:#9FCFB6">M&eacute;todo Visto</div>
        <h2>4 acciones para convertir b&uacute;squedas en facturaci&oacute;n.</h2>
        <p>El m&eacute;todo no vive en una diapositiva. Vive en tareas mensuales sobre tu ficha, tu web, tus rese&ntilde;as y tus llamadas.</p>
        <a class="rd-btn" href="metodo.html">Ver m&eacute;todo completo</a>
      </aside>
      <div class="rd-steps">
        <article class="rd-step"><div class="rd-step-img" style="background-image:url(${mapImage})"></div><div><h3>Identidad</h3><p>Google entiende qui&eacute;n eres, qu&eacute; haces y en qu&eacute; zonas trabajas.</p></div><div class="rd-step-m">Mueve visibilidad</div></article>
        <article class="rd-step"><div class="rd-step-img" style="background-image:url(${methodImage2})"></div><div><h3>Atractivo</h3><p>El cliente ve servicios, fotos, precios orientativos y motivos para elegirte.</p></div><div class="rd-step-m">Mueve elecci&oacute;n</div></article>
        <article class="rd-step"><div class="rd-step-img" style="background-image:url(${methodImage3})"></div><div><h3>Confianza</h3><p>Rese&ntilde;as, respuestas y prueba real reducen la duda antes de llamar.</p></div><div class="rd-step-m">Mueve conversi&oacute;n</div></article>
        <article class="rd-step"><div class="rd-step-img" style="background-image:url(${methodImage4})"></div><div><h3>Llamadas</h3><p>Botones, WhatsApp, rutas y medici&oacute;n convierten presencia en contactos.</p></div><div class="rd-step-m">Mueve facturaci&oacute;n</div></article>
      </div>
    </div>
  </section>

  <section class="rd-section rd-month">
    <div class="rd-wrap">
      <div class="rd-k">Trabajo mensual</div>
      <h2 class="rd-h2">Qu&eacute; ves cada mes, sin humo.</h2>
      <p class="rd-sub">El cliente no deber&iacute;a tener que adivinar qu&eacute; se ha hecho. Cada mes tiene acciones, datos y decisiones.</p>
      <div class="rd-month-grid">
        <article class="rd-month-card"><b>Acciones realizadas</b><p>Cambios concretos en ficha, web, servicios, fotos, rese&ntilde;as, contenido y medici&oacute;n.</p></article>
        <article class="rd-month-card"><b>Llamadas y zonas</b><p>Qu&eacute; ha entrado, desde d&oacute;nde, por qu&eacute; servicio y qu&eacute; parte merece m&aacute;s trabajo.</p></article>
        <article class="rd-month-card"><b>Siguiente apuesta</b><p>La prioridad del mes siguiente sale de datos: ciudad, servicio, margen y competencia.</p></article>
      </div>
    </div>
  </section>

  <section class="rd-section">
    <div class="rd-wrap rd-proof">
      <article class="rd-proof-card photo">
        <img src="${mapImage}" alt="Cliente buscando negocios locales en Google Maps">
        <div class="rd-proof-pad">
        <div class="rd-k">Por qu&eacute; cambia</div>
        <h2>El mapa no es un escaparate. Es una cola de clientes.</h2>
        <p>Si sabes cu&aacute;nto se busca, cu&aacute;nto vale un cliente y qu&eacute; parte se queda el mapa, las decisiones son m&aacute;s simples. No se trata de publicar por publicar. Se trata de ganar las b&uacute;squedas que pueden acabar en caja.</p>
        </div>
      </article>
      <article class="rd-proof-card dark">
        <div class="rd-k" style="color:#9FCFB6">Lo que evitamos</div>
        <h2>Menos promesas grandes. M&aacute;s trabajo visible.</h2>
        <ul class="rd-list">
          <li>No vendemos posiciones sin mirar la ciudad.</li>
          <li>No mezclamos servicios baratos con servicios rentables.</li>
          <li>No mandamos informes que no hablan de llamadas.</li>
          <li>No cambiamos de estrategia cada semana.</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="rd-final">
    <div class="rd-wrap">
      <h2>Empieza por saber cu&aacute;nto dinero se mueve en tu ciudad.</h2>
      <p>Con esa cifra delante, el SEO deja de sonar abstracto. Ya puedes decidir qu&eacute; ciudad, qu&eacute; servicio y qu&eacute; llamada merece pelear primero.</p>
      <div class="rd-actions">
        <a class="rd-btn" href="#calculadora">Calcular facturaci&oacute;n local</a>
        <a class="rd-btn alt" href="metodo.html">Ver metodolog&iacute;a</a>
      </div>
    </div>
  </section>
</main>

${commonFooter}
</body></html>`;
}

function generateHomeRedesignPage() {
  fs.writeFileSync(path.join(outDir, "home-redesign.html"), buildHomeRedesignPage(), "utf8");
}

function stepPageName(action, step) {
  if (action.number === 1 && step.number === "04") return "paso-categoria.html";
  return `paso-${slugify(action.name)}-${step.number}-${slugify(step.title)}.html`;
}

function allStepEntries(actions) {
  return actions.flatMap((action) =>
    action.steps.map((step, index) => ({
      action,
      step,
      index,
      page: stepPageName(action, step),
    })),
  );
}

function buildStepCard(action, step, index) {
  const tintCycle = ["#fff4df", "#e7f8f3", "#EAF6EF", "#0A2E28"];
  const accentCycle = ["#f08a24", "#1aa87d", "#12A97E", "#34C7A0"];
  const dark = index % tintCycle.length === 3;
  const href = stepPageName(action, step);
  const tasks = step.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("");

  return String.raw`            <article class="list-card">
              <a class="lthumb" href="${href}" style="--tint:${tintCycle[index % tintCycle.length]};--thumb-ink:${dark ? "#fff" : "#1c1d1f"}"><span class="mini-brand">${step.number} &middot; Paso</span><strong>${escapeHtml(step.title)}</strong><span class="orb" style="--accent:${accentCycle[index % accentCycle.length]}"></span></a>
              <div class="lc-body"><h3>${step.number} &middot; ${escapeHtml(step.title)}</h3><p class="lc-desc">${escapeHtml(step.tasks[0] ?? "")}</p><div class="lc-meta"><b>${escapeHtml(action.name)}</b> &middot; ${step.tasks.length} tareas</div><ul class="lc-tasks">${tasks}</ul></div>
              <div class="lc-side"><a class="go" href="${href}">Ver paso -></a></div>
            </article>`;
}

function buildObjectiveCards(action, images) {
  const meta = actionMeta[action.number];
  return meta.objectives
    .map((title, index) => {
      const step = action.steps[index] ?? action.steps[0];
      const src = images.objective[index] ?? images.hero;
      return `<div class="obj-card"><img class="obj-img" src="${src}" alt="${escapeHtml(title)}"><div class="obj-txt"><b>${escapeHtml(title)}</b><small>${escapeHtml(step.tasks[0] ?? step.title)}</small></div></div>`;
    })
    .join("\n          ");
}

function buildMethodMain(action, images) {
  const meta = actionMeta[action.number];
  const topics = meta.topics.map((topic) => `<a class="pill" href="#todas">${escapeHtml(topic)}</a>`).join("\n          ");
  const stepCards = action.steps.map((step, index) => buildStepCard(action, step, index)).join("\n\n");

  return String.raw`<main>
    <div class="hero-band">
    <section class="cat-head">
      <div class="inner">
        <div class="cat-hero-img"><img src="${images.hero}" alt="${escapeHtml(action.result)}"></div>
        <div>
          <div class="cat-eyebrow">Acciones para ${escapeHtml(action.name)}</div><h1>${escapeHtml(action.result)}</h1>
          <p>${escapeHtml(action.description)}</p>
          <div class="cat-stats">
            <div><b>12</b>pasos en esta accion</div>
            <div><b>${action.taskCount}</b>tareas concretas</div>
            <div><b>${action.number}/4</b>accion del metodo</div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <section class="section">
      <div class="wrap">
        <h2>Que trabajamos en esta accion</h2>
        <p class="sub" style="margin-bottom:18px">Los bloques que se revisan y mejoran cada mes dentro de ${escapeHtml(action.name)}.</p>
        <div class="pills">
          ${topics}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <h2>Lo que mejora esta accion</h2>
        <p class="sub" style="margin-bottom:18px">${escapeHtml(action.result)} no es una idea: se aterriza en tareas visibles sobre ficha, web y medicion.</p>
        <div class="obj-row">
          ${buildObjectiveCards(action, images)}
        </div>
      </div>
    </section>

    <section class="section" id="todas">
      <div class="wrap">
        <h2 style="margin-bottom:18px">Todos los pasos de esta accion</h2>
        <div class="listing">
          <aside class="filters">
            <div class="guarantee"><b>Metodo completo.</b> Esta accion contiene 12 pasos y ${action.taskCount} tareas sacadas del documento de trabajo.</div>
            <div class="fgroup"><b>Accion <span>▾</span></b>
              <label class="fopt"><input type="checkbox" checked> ${escapeHtml(action.name)}</label>
              <label class="fopt"><input type="checkbox"> 12 pasos</label>
              <label class="fopt"><input type="checkbox"> ${action.taskCount} tareas</label>
            </div>
            <div class="fgroup"><b>Como se trabaja <span>▾</span></b>
              <label class="fopt"><input type="checkbox" checked> Mes a mes</label>
              <label class="fopt"><input type="checkbox" checked> Lo hace Visto</label>
              <label class="fopt"><input type="checkbox"> Se mide y se ajusta</label>
            </div>
          </aside>

          <div class="list">
            <div class="list-head">
              <span class="count">12 pasos</span>
              <span class="selbox">Ordenar por: Orden recomendado ▾</span>
            </div>

${stepCards}

          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="dobanner">
          <div class="copy">
            <h2>Lo hacemos sobre tu ficha real</h2>
            <p>Cada tarea queda aterrizada en acciones concretas, con criterio local y seguimiento mensual. No es una lista estatica: se ejecuta, se mide y se vuelve a ajustar.</p>
            <a class="btn" href="metodo.html">Ver el metodo completo -></a>
          </div>
          <div class="ph"><img src="${images.banner}" alt="Especialista de Visto en SEO local"></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="nextband">
          <div>
            <h2>Esta accion alimenta a las demas</h2>
            <p>El ciclo completo es: te encuentran, te eligen, se fian, te llaman. Cada mejora refuerza la siguiente, y cada llamada o resena vuelve a dar senales a Google.</p>
          </div>
          <a class="btn" href="metodo.html">Ver las 4 acciones -></a>
        </div>
      </div>
    </section>
  </main>`;
}

function setMethodTab(html, label, href, active) {
  const pattern = new RegExp(
    `<a class="st-card(?:\\s+on)?\\s*" href="[^"]*">([\\s\\S]*?<span class="n">${escapeRegExp(label)}</span>[\\s\\S]*?</a>)`,
  );
  return html.replace(pattern, `<a class="st-card${active ? " on" : ""}" href="${href}">$1`);
}

function updateMethodSubnav(html, destName) {
  const tabs = [
    ["Empieza aquí", "metodo.html"],
    ["Identidad", "metodo-fase1.html"],
    ["Atractivo", "metodo-fase2.html"],
    ["Confianza", "metodo-fase3.html"],
    ["Conversión", "metodo-fase4.html"],
  ];

  return html.replace(/<a class="st-card(?:\s+on)?\s*" href="[^"]*">[\s\S]*?<\/a>/g, (block) => {
    const tab = tabs.find(([label]) => block.includes(`<span class="n">${label}</span>`));
    if (!tab) return block;

    const [, href] = tab;
    return block
      .replace(/class="st-card(?:\s+on)?\s*"/, `class="st-card${destName === href ? " on" : ""}"`)
      .replace(/href="[^"]*"/, `href="${href}"`);
  });
}

function buildTaskDetails(step) {
  return step.tasks
    .map(
      (task, index) =>
        `<details class="acc"${index === 0 ? " open" : ""}><summary><span class="n">${index + 1}</span><span class="acc-t">${escapeHtml(task)}</span><span class="chev">⌄</span></summary><div class="acc-body">Esta tarea forma parte del paso ${escapeHtml(step.title)} y se revisa dentro del trabajo mensual para que la ficha, la web y la medicion apunten en la misma direccion.</div></details>`,
    )
    .join("\n        ");
}

function buildStepPage(entry, entries, images) {
  const { action, step, page } = entry;
  const entryIndex = entries.findIndex((candidate) => candidate.page === page);
  const previous = entries[entryIndex - 1];
  const next = entries[entryIndex + 1];
  const phaseHref = actionMeta[action.number].dest;
  const taskCount = step.tasks.length;
  const lead = step.tasks[0] ?? action.description;
  const learnItems = step.tasks
    .slice(0, 6)
    .map((task) => `<div>${escapeHtml(task)}</div>`)
    .join("\n          ");
  const related = action.steps
    .filter((candidate) => candidate.number !== step.number)
    .slice(0, 4)
    .map((candidate) => `<a class="pill" href="${stepPageName(action, candidate)}">${candidate.number} · ${escapeHtml(candidate.title)}</a>`)
    .join("\n          ");

  return String.raw`<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(step.title)} · Paso ${Number(step.number)} · Visto</title>
<meta name="description" content="${escapeHtml(`Paso ${Number(step.number)} de ${action.result}: ${lead}`)}">
<link rel="preconnect" href="https://fonts.googleapis.com/">
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
<link href="${fontHref}" rel="stylesheet">
${stepGeneratedCss}
${commonShellCss}
</head>
<body>
${commonHeader}

<section class="step-hero">
  <div class="inner">
    <div class="crumbs"><a href="metodo.html">Nuestro metodo</a> › <a href="${phaseHref}">${escapeHtml(action.result)}</a> › Paso ${Number(step.number)}</div>
    <h1>${escapeHtml(step.title)}</h1>
    <p class="lead">${escapeHtml(lead)}</p>
    <div class="hero-meta">
      <span class="badge">${escapeHtml(action.name)}</span>
      <span>${taskCount} tareas</span>
      <span>Paso ${Number(step.number)} de 12</span>
      <span>Revision mensual</span>
    </div>
    <div class="by">Parte de la accion <b>${escapeHtml(action.result)}</b></div>
  </div>
</section>

<div class="step-wrap">
  <div class="step-shell">
    <aside class="step-card">
      <div class="pic"><img src="${images.hero}" alt="${escapeHtml(step.title)}"></div>
      <div class="pad">
        <h4>El paso de un vistazo</h4>
        <div class="fact-list">
          <div class="fact"><span><b>Accion</b>${escapeHtml(action.name)}</span></div>
          <div class="fact"><span><b>Resultado</b>${escapeHtml(action.result)}</span></div>
          <div class="fact"><span><b>Tareas</b>${taskCount} tareas concretas</span></div>
          <div class="fact"><span><b>Metodo</b>4 acciones · 48 pasos · 304 tareas</span></div>
        </div>
        <a class="btn block" href="${phaseHref}">Ver los 12 pasos</a>
      </div>
    </aside>

    <div class="step-content">
      <div class="block">
        <h2>Que consigues en este paso</h2>
        <div class="learn">
          ${learnItems}
        </div>
      </div>

      <h2 class="h-sec">Que cambia con este paso</h2>
      <p class="p-sec">Este paso convierte una parte concreta del metodo en trabajo visible y revisable. No queda como una recomendacion generica: se baja a tareas, se aplica y se mide dentro del ciclo mensual.</p>
      <div class="compare3">
        <div class="cmp a"><h3>Antes</h3><p>La ficha o la web dependen de intuicion, datos incompletos o acciones sueltas que no siempre refuerzan la visibilidad local.</p></div>
        <div class="cmp b"><h3>El ajuste</h3><p>Se ejecutan las tareas del paso con criterio local, conectando ficha, web, reputacion y medicion segun corresponda.</p></div>
        <div class="cmp c"><h3>Despues</h3><p>El negocio queda mas claro para Google y mas facil de elegir para el cliente, con una accion documentada y revisable.</p></div>
      </div>

      <h2 class="h-sec">Por que importa</h2>
      <p class="p-sec">${escapeHtml(action.description)} Este paso aporta una pieza concreta a ese sistema: ${escapeHtml(lead)}</p>

      <div class="curr-head">
        <h2>Como se hace, tarea a tarea</h2>
        <span>${taskCount} tareas · trabajo revisable</span>
      </div>
      <div class="curr">
        <div class="acc-top">${escapeHtml(step.title)} <span>${taskCount} tareas</span></div>
        ${buildTaskDetails(step)}
      </div>

      <h2 class="h-sec">Temas relacionados</h2>
      <div class="pills">
        ${related}
      </div>

      <div class="pasonav">
        ${previous ? `<a class="pn prev" href="${previous.page}"><span class="pn-dir">← Paso anterior</span><span class="pn-t">${Number(previous.step.number)} · ${escapeHtml(previous.step.title)}</span></a>` : `<a class="pn prev" href="${phaseHref}"><span class="pn-dir">Volver a la accion</span><span class="pn-t">${escapeHtml(action.result)}</span></a>`}
        ${next ? `<a class="pn next" href="${next.page}"><span class="pn-dir">Paso siguiente →</span><span class="pn-t">${Number(next.step.number)} · ${escapeHtml(next.step.title)}</span></a>` : `<a class="pn next" href="metodo.html"><span class="pn-dir">Cerrar ciclo</span><span class="pn-t">Ver el metodo completo</span></a>`}
      </div>
      <p style="margin:18px 0 10px"><a class="btn" href="${phaseHref}">← Ver los 12 pasos de esta accion</a></p>
    </div>
  </div>
</div>

${commonFooter}
</body></html>`;
}

function updateExistingCategoryStepPage(actions) {
  const entries = allStepEntries(actions);
  const current = entries.find((entry) => entry.page === "paso-categoria.html");
  if (!current) return;

  const index = entries.indexOf(current);
  const previous = entries[index - 1];
  const next = entries[index + 1];
  const filePath = path.join(outDir, "paso-categoria.html");
  let html = fs.readFileSync(filePath, "utf8");

  if (previous) {
    html = html.replace(/<a class="pn prev" href="[^"]*">([\s\S]*?<span class="pn-t">)[\s\S]*?(<\/span><\/a>)/, `<a class="pn prev" href="${previous.page}">$1${Number(previous.step.number)} · ${escapeHtml(previous.step.title)}$2`);
  }
  if (next) {
    html = html.replace(/<a class="pn next" href="[^"]*">([\s\S]*?<span class="pn-t">)[\s\S]*?(<\/span><\/a>)/, `<a class="pn next" href="${next.page}">$1${Number(next.step.number)} · ${escapeHtml(next.step.title)}$2`);
  }

  fs.writeFileSync(filePath, html, "utf8");
}

function generateStepPages(actions, images) {
  const entries = allStepEntries(actions);

  for (const entry of entries) {
    if (entry.page === "paso-categoria.html") continue;
    fs.writeFileSync(path.join(outDir, entry.page), buildStepPage(entry, entries, images), "utf8");
  }

  updateExistingCategoryStepPage(actions);
}

function generateMethodPhasePages(actions) {
  const templatePath = path.join(outDir, "metodo-fase1.html");
  const templateHtml = fs.readFileSync(templatePath, "utf8");
  const images = extractMethodImages(templateHtml);

  for (const action of actions) {
    const meta = actionMeta[action.number];
    const dest = meta.dest;
    let html = templateHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(action.result)} · Visto</title>`);
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${escapeHtml(`Acciones para ${action.name}: ${action.result}. 12 pasos y ${action.taskCount} tareas del metodo Visto.`)}">`,
    );
    html = html.replace(/<main>[\s\S]*?<\/main>/, buildMethodMain(action, images));
    html = updateMethodSubnav(html, dest);

    if (!html.includes('id="visto-method-generated"')) {
      html = html.replace("</head>", `${methodGeneratedCss}\n</head>`);
    }

    fs.writeFileSync(path.join(outDir, dest), html, "utf8");
  }

  return images;
}

function updateBuiltMethodPages() {
  for (const destName of builtPageNames.filter((name) => name.startsWith("metodo"))) {
    const filePath = path.join(outDir, destName);
    let html = fs.readFileSync(filePath, "utf8");
    html = updateMethodSubnav(html, destName);
    fs.writeFileSync(filePath, html, "utf8");
  }
}

function assertBuiltPageLinks() {
  const allowed = new Set(["#"]);
  for (const page of builtPages) allowed.add(page);

  for (const pageName of builtPageNames) {
    const html = fs.readFileSync(path.join(outDir, pageName), "utf8");
    const footer = html.match(/<footer class="vfoot">[\s\S]*?<\/footer>/)?.[0] ?? "";
    for (const href of footer.matchAll(/href="([^"]+)"/g)) {
      const value = href[1];
      if (value.startsWith("#")) continue;
      if (!allowed.has(value)) {
        throw new Error(`Unexpected footer link in ${pageName}: ${value}`);
      }
    }
  }
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const { srcPath, dest } of pages) {
  const destPath = path.join(outDir, dest);
  const html = fs.readFileSync(srcPath, "utf8");
  fs.writeFileSync(destPath, normalize(html, dest), "utf8");
}
fs.copyFileSync(path.join(outDir, "home.html"), path.join(outDir, "index.html"));
generateHomeRedesignPage();

const sectors = parseSectorYaml();
generateSectorPages(sectors);
const methodActions = parseMethodMarkdown();
const methodImages = generateMethodPhasePages(methodActions);
generateStepPages(methodActions, methodImages);
builtPageNames = [
  ...new Set([
    ...pages.map((page) => page.dest),
    ...generatedMethodPages,
    ...generatedRedesignPages,
    ...staticAliasPages,
    ...sectors.map((sector) => sectorPageName(sector)),
    ...allStepEntries(methodActions).map((entry) => entry.page),
  ]),
];
builtPages = new Set(builtPageNames);
updateBuiltMethodPages();
assertBuiltPageLinks();

const packageJson = {
  scripts: {
    start: "vite --host 127.0.0.1",
    preview: "vite --host 127.0.0.1",
  },
  dependencies: {
    vite: "latest",
  },
  devDependencies: {},
};

fs.writeFileSync(
  path.join(outDir, "package.json"),
  `${JSON.stringify(packageJson, null, 2)}\n`,
  "utf8",
);

fs.writeFileSync(
  path.join(outDir, "README.md"),
  [
    "# Visto",
    "",
    `Sitio estatico con las ${builtPageNames.length} paginas construidas.`,
    "",
    "- home.html",
    "- sectores.html",
    "- sector.html",
    "- fontaneros-madrid.html",
    "- nuestros-resultados.html",
    "- metodo.html",
    "- metodo-fase1.html",
    "- metodo-fase2.html",
    "- metodo-fase3.html",
    "- metodo-fase4.html",
    "- home-redesign.html",
    `- ${sectors.length} paginas de sector desde sectores-contenido.yaml`,
    "- 48 paginas de paso del metodo",
    "",
    "Para servirlo: `npm install` y `npm run start` desde esta carpeta.",
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Built ${builtPageNames.length} pages in ${outDir}`);
