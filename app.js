// Dados dos alunos para o SIA - Grade do Aluno
// Edite livremente abaixo com os dados reais.

const students = [
  {
    id: "1",
    nome: "Aluno Exemplo",
    curso: "Bacharelado em Engenharia Civil",
    ra: "202012345",
    matricula: "1234567",
    periodoIngresso: "2020.1",
    periodoConclusao: "2024.2",
    statusTexto: "Aguardando colação de grau",
    statusBadge: "Aprovado em todas as disciplinas",
    historico: [
      {
        periodo: "2020.1",
        titulo: "Ingresso no curso",
        descricao: "Aluno ingressou por processo seletivo regular.",
        tag: "Ingresso"
      },
      {
        periodo: "2022.2",
        titulo: "Conclusão de estágio obrigatório",
        descricao: "Carga horária de estágio integralizada com conceito satisfatório.",
        tag: "Estágio"
      },
      {
        periodo: "2023.2",
        titulo: "Conclusão de TCC",
        descricao: "Trabalho de Conclusão de Curso aprovado pela banca examinadora.",
        tag: "TCC"
      },
      {
        periodo: "2024.2",
        titulo: "Integralização da matriz curricular",
        descricao: "Todas as disciplinas obrigatórias cursadas com aprovação.",
        tag: "Conclusão"
      }
    ],
    disciplinas: [
      {
        periodo: "1º",
        codigo: "ENG101",
        nome: "Cálculo Diferencial e Integral I",
        ch: 80,
        nota: 8.5,
        situacao: "Aprovado",
        ano: 2020,
        semestre: 1
      },
      {
        periodo: "1º",
        codigo: "ENG102",
        nome: "Geometria Analítica e Álgebra Linear",
        ch: 80,
        nota: 7.8,
        situacao: "Aprovado",
        ano: 2020,
        semestre: 1
      },
      {
        periodo: "2º",
        codigo: "ENG201",
        nome: "Cálculo Diferencial e Integral II",
        ch: 80,
        nota: 8.2,
        situacao: "Aprovado",
        ano: 2020,
        semestre: 2
      },
      {
        periodo: "2º",
        codigo: "ENG202",
        nome: "Física Geral I",
        ch: 80,
        nota: 7.5,
        situacao: "Aprovado",
        ano: 2020,
        semestre: 2
      },
      {
        periodo: "3º",
        codigo: "ENG301",
        nome: "Mecânica dos Sólidos I",
        ch: 80,
        nota: 9.0,
        situacao: "Aprovado",
        ano: 2021,
        semestre: 1
      },
      {
        periodo: "3º",
        codigo: "ENG302",
        nome: "Topografia",
        ch: 80,
        nota: 8.7,
        situacao: "Aprovado",
        ano: 2021,
        semestre: 1
      },
      {
        periodo: "4º",
        codigo: "ENG401",
        nome: "Materiais de Construção Civil",
        ch: 80,
        nota: 8.1,
        situacao: "Aprovado",
        ano: 2021,
        semestre: 2
      },
      {
        periodo: "4º",
        codigo: "ENG402",
        nome: "Resistência dos Materiais II",
        ch: 80,
        nota: 7.9,
        situacao: "Aprovado",
        ano: 2021,
        semestre: 2
      },
      {
        periodo: "5º",
        codigo: "ENG501",
        nome: "Estruturas de Concreto Armado I",
        ch: 80,
        nota: 8.8,
        situacao: "Aprovado",
        ano: 2022,
        semestre: 1
      },
      {
        periodo: "5º",
        codigo: "ENG502",
        nome: "Hidráulica",
        ch: 80,
        nota: 8.0,
        situacao: "Aprovado",
        ano: 2022,
        semestre: 1
      },
      {
        periodo: "6º",
        codigo: "ENG601",
        nome: "Estruturas Metálicas",
        ch: 80,
        nota: 8.3,
        situacao: "Aprovado",
        ano: 2022,
        semestre: 2
      },
      {
        periodo: "6º",
        codigo: "ENG602",
        nome: "Saneamento Básico",
        ch: 80,
        nota: 9.1,
        situacao: "Aprovado",
        ano: 2022,
        semestre: 2
      },
      {
        periodo: "7º",
        codigo: "ENG701",
        nome: "Gestão de Projetos na Construção Civil",
        ch: 80,
        nota: 8.6,
        situacao: "Aprovado",
        ano: 2023,
        semestre: 1
      },
      {
        periodo: "7º",
        codigo: "ENG702",
        nome: "Segurança do Trabalho e Legislação",
        ch: 80,
        nota: 8.4,
        situacao: "Aprovado",
        ano: 2023,
        semestre: 1
      },
      {
        periodo: "8º",
        codigo: "ENG801",
        nome: "Trabalho de Conclusão de Curso",
        ch: 160,
        nota: 9.2,
        situacao: "Aprovado",
        ano: 2023,
        semestre: 2
      },
      {
        periodo: "8º",
        codigo: "ENG802",
        nome: "Estágio Supervisionado",
        ch: 200,
        nota: 9.0,
        situacao: "Aprovado",
        ano: 2023,
        semestre: 2
      }
    ]
  }
];

function formatNumber(value) {
  return value.toFixed(1).replace(".", ",");
}

function calculateSummary(student) {
  const totalSubjects = student.disciplinas.length;
  const totalHours = student.disciplinas.reduce((acc, d) => acc + (d.ch || 0), 0);
  const avgGrade =
    totalSubjects > 0
      ? student.disciplinas.reduce((acc, d) => acc + (d.nota || 0), 0) / totalSubjects
      : 0;

  return {
    totalSubjects,
    totalHours,
    avgGrade
  };
}

function populateStudentSelect() {
  const select = document.getElementById("studentSelect");
  select.innerHTML = "";
  students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.id;
    option.textContent = `${student.nome} (${student.ra})`;
    select.appendChild(option);
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .filter((p) => p.length > 0)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
}

function renderOverview(student) {
  document.getElementById("studentName").textContent = student.nome;
  document.getElementById("courseName").textContent = student.curso;
  document.getElementById("raValue").textContent = student.ra;
  document.getElementById("registrationValue").textContent = student.matricula;
  document.getElementById("entryPeriod").textContent = student.periodoIngresso;
  document.getElementById("completionPeriod").textContent = student.periodoConclusao;
  document.getElementById("statusText").textContent = student.statusTexto;
  document.getElementById("statusBadge").textContent = student.statusBadge;
  document.getElementById("studentInitials").textContent = getInitials(student.nome);

  const summary = calculateSummary(student);
  document.getElementById("totalSubjects").textContent = summary.totalSubjects;
  document.getElementById("totalHours").textContent = `${summary.totalHours} h`;
  document.getElementById("gpaValue").textContent = formatNumber(summary.avgGrade);
  document.getElementById("pendingValue").textContent = "Nenhuma pendência";
}

function renderDisciplines(student) {
  const tbody = document.getElementById("disciplinesTableBody");
  tbody.innerHTML = "";

  const periodFilter = document.getElementById("periodFilter");
  const searchInput = document.getElementById("searchInput");

  const selectedPeriod = periodFilter.value;
  const searchTerm = (searchInput.value || "").toLowerCase();

  const filtered = student.disciplinas.filter((disc) => {
    const matchesPeriod =
      selectedPeriod === "todos" || disc.periodo === selectedPeriod;
    const matchesSearch =
      disc.nome.toLowerCase().includes(searchTerm) ||
      disc.codigo.toLowerCase().includes(searchTerm);

    return matchesPeriod && matchesSearch;
  });

  filtered.forEach((disc) => {
    const tr = document.createElement("tr");

    const periodoTd = document.createElement("td");
    periodoTd.textContent = disc.periodo;
    tr.appendChild(periodoTd);

    const codigoTd = document.createElement("td");
    codigoTd.textContent = disc.codigo;
    tr.appendChild(codigoTd);

    const nomeTd = document.createElement("td");
    nomeTd.textContent = disc.nome;
    tr.appendChild(nomeTd);

    const chTd = document.createElement("td");
    chTd.textContent = disc.ch;
    tr.appendChild(chTd);

    const notaTd = document.createElement("td");
    notaTd.textContent = formatNumber(disc.nota);
    tr.appendChild(notaTd);

    const situacaoTd = document.createElement("td");
    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-success");
    badge.textContent = disc.situacao;
    situacaoTd.appendChild(badge);
    tr.appendChild(situacaoTd);

    const periodoLetivoTd = document.createElement("td");
    periodoLetivoTd.textContent = `${disc.ano}.${disc.semestre}`;
    tr.appendChild(periodoLetivoTd);

    tbody.appendChild(tr);
  });
}

function populatePeriodFilter(student) {
  const periodFilter = document.getElementById("periodFilter");
  const periods = Array.from(new Set(student.disciplinas.map((d) => d.periodo)));
  periods.sort();

  periodFilter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "todos";
  allOption.textContent = "Todos";
  periodFilter.appendChild(allOption);

  periods.forEach((p) => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = p;
    periodFilter.appendChild(option);
  });
}

function renderHistory(student) {
  const list = document.getElementById("historyTimeline");
  list.innerHTML = "";

  student.historico.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");

    const periodSpan = document.createElement("span");
    periodSpan.classList.add("timeline-period");
    periodSpan.textContent = item.periodo;
    li.appendChild(periodSpan);

    const card = document.createElement("div");
    card.classList.add("timeline-card");

    const title = document.createElement("div");
    title.classList.add("timeline-title");
    title.textContent = item.titulo;
    card.appendChild(title);

    const description = document.createElement("div");
    description.classList.add("timeline-description");
    description.textContent = item.descricao;
    card.appendChild(description);

    const tag = document.createElement("span");
    tag.classList.add("timeline-tag");
    tag.textContent = item.tag;
    card.appendChild(tag);

    li.appendChild(card);
    list.appendChild(li);
  });
}

function setActiveSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("visible");
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("visible");
}

function setupMenu() {
  const buttons = document.querySelectorAll(".menu-item");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const section = btn.getAttribute("data-section");
      if (section === "overview") setActiveSection("overviewSection");
      if (section === "disciplines") setActiveSection("disciplinesSection");
      if (section === "history") setActiveSection("historySection");
    });
  });
}

function setupFilters(student) {
  const periodFilter = document.getElementById("periodFilter");
  const searchInput = document.getElementById("searchInput");

  periodFilter.addEventListener("change", () => renderDisciplines(student));
  searchInput.addEventListener("input", () => renderDisciplines(student));
}

function loadStudent(id) {
  const student = students.find((s) => s.id === id) || students[0];
  if (!student) return;

  renderOverview(student);
  populatePeriodFilter(student);
  renderDisciplines(student);
  renderHistory(student);
  setupFilters(student);
}

document.addEventListener("DOMContentLoaded", () => {
  populateStudentSelect();
  setupMenu();

  const select = document.getElementById("studentSelect");
  if (students.length > 0) {
    select.value = students[0].id;
    loadStudent(students[0].id);
  }

  select.addEventListener("change", () => {
    loadStudent(select.value);
  });
});
