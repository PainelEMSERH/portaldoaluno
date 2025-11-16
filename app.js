// ===============================================
// CONFIGURAÇÃO DO ALUNO (VOCÊ EDITA APENAS AQUI)
// ===============================================
// Tudo abaixo é controlado manualmente:
// - Dados cadastrais do aluno
// - Situação acadêmica
// - Lista de disciplinas (código, nome, CH, nota, ano/semestre)
// - Histórico simplificado (linha do tempo)

const aluno = {
  dadosGerais: {
    nome: "Aluno Exemplo",
    curso: "Bacharelado em Engenharia Civil",
    ra: "202012345",
    matricula: "1234567",
    cpf: "000.000.000-00",
    dataNascimento: "01/01/2000",
    campus: "Campus Exemplo",
    turno: "Noturno",
    periodoIngresso: "2020.1",
    periodoConclusao: "2024.2",
    statusTexto: "Aguardando colação de grau",
    statusBadge: "Aprovado em todas as disciplinas"
  },

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
    // EXEMPLOS — SUBSTITUA PELOS DADOS REAIS
    {
      periodo: "1º",
      codigo: "COD001",
      nome: "Nome da Disciplina 1",
      ch: 80,
      nota: 8.5,
      situacao: "Aprovado",
      ano: 2020,
      semestre: 1
    },
    {
      periodo: "1º",
      codigo: "COD002",
      nome: "Nome da Disciplina 2",
      ch: 80,
      nota: 9.0,
      situacao: "Aprovado",
      ano: 2020,
      semestre: 1
    },
    {
      periodo: "2º",
      codigo: "COD003",
      nome: "Nome da Disciplina 3",
      ch: 80,
      nota: 7.8,
      situacao: "Aprovado",
      ano: 2020,
      semestre: 2
    },
    {
      periodo: "2º",
      codigo: "COD004",
      nome: "Nome da Disciplina 4",
      ch: 80,
      nota: 8.2,
      situacao: "Aprovado",
      ano: 2020,
      semestre: 2
    }
  ]
};

// ===============================================
// LÓGICA DE APRESENTAÇÃO (NÃO PRECISA MEXER)
// ===============================================

function formatNumber(value) {
  return value.toFixed(1).replace(".", ",");
}

function calculateSummary(aluno) {
  const totalSubjects = aluno.disciplinas.length;
  const totalHours = aluno.disciplinas.reduce((acc, d) => acc + (d.ch || 0), 0);
  const avgGrade =
    totalSubjects > 0
      ? aluno.disciplinas.reduce((acc, d) => acc + (d.nota || 0), 0) / totalSubjects
      : 0;

  return {
    totalSubjects,
    totalHours,
    avgGrade
  };
}

function getInitials(name) {
  return name
    .split(" ")
    .filter((p) => p.length > 0)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
}

function renderOverview(aluno) {
  const d = aluno.dadosGerais;

  document.getElementById("studentName").textContent = d.nome;
  document.getElementById("courseName").textContent = d.curso;
  document.getElementById("raValue").textContent = d.ra;
  document.getElementById("matriculaValue").textContent = d.matricula;
  document.getElementById("cpfValue").textContent = d.cpf;
  document.getElementById("campusValue").textContent = d.campus;
  document.getElementById("turnoValue").textContent = d.turno;
  document.getElementById("nascimentoValue").textContent = d.dataNascimento;
  document.getElementById("entryPeriod").textContent = d.periodoIngresso;
  document.getElementById("completionPeriod").textContent = d.periodoConclusao;
  document.getElementById("statusText").textContent = d.statusTexto;
  document.getElementById("statusBadge").textContent = d.statusBadge;
  document.getElementById("studentInitials").textContent = getInitials(d.nome);

  const summary = calculateSummary(aluno);
  document.getElementById("totalSubjects").textContent = summary.totalSubjects;
  document.getElementById("totalHours").textContent = `${summary.totalHours} h`;
  document.getElementById("gpaValue").textContent = formatNumber(summary.avgGrade);
  document.getElementById("pendingValue").textContent = "Nenhuma pendência";
}

function renderDisciplines(aluno) {
  const tbody = document.getElementById("disciplinesTableBody");
  tbody.innerHTML = "";

  const periodFilter = document.getElementById("periodFilter");
  const searchInput = document.getElementById("searchInput");

  const selectedPeriod = periodFilter.value;
  const searchTerm = (searchInput.value || "").toLowerCase();

  const filtered = aluno.disciplinas.filter((disc) => {
    const matchesPeriod = selectedPeriod === "todos" || disc.periodo === selectedPeriod;
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

function populatePeriodFilter(aluno) {
  const periodFilter = document.getElementById("periodFilter");
  const periods = Array.from(new Set(aluno.disciplinas.map((d) => d.periodo)));
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

function renderHistory(aluno) {
  const list = document.getElementById("historyTimeline");
  list.innerHTML = "";

  aluno.historico.forEach((item) => {
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

function setupFilters(aluno) {
  const periodFilter = document.getElementById("periodFilter");
  const searchInput = document.getElementById("searchInput");

  periodFilter.addEventListener("change", () => renderDisciplines(aluno));
  searchInput.addEventListener("input", () => renderDisciplines(aluno));
}

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  renderOverview(aluno);
  populatePeriodFilter(aluno);
  renderDisciplines(aluno);
  renderHistory(aluno);
  setupFilters(aluno);
});
