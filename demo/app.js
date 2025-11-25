const sampleAnalysis = {
  sentiment: "positive",
  key_points: [
    "미 연준의 금리 동결 기조가 지속되며 성장주 중심으로 투자심리가 회복되고 있습니다.",
    "국내 AI 관련 대형주에 외국인 순매수세가 확대되는 모습입니다.",
    "단기적으로는 환율 변동성에 유의하며 분할 매수 전략이 권장됩니다."
  ]
};

async function analyzeNewsMock(req) {
  // Simulate latency and pick a pseudo-random sentiment for variety
  const sentiments = ["positive", "neutral", "negative"];
  const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
  await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
  return {
    ...sampleAnalysis,
    sentiment,
  };
}

const state = {
  loading: false,
  sentiment: null,
  keyPoints: [],
};

function $(selector) {
  return document.querySelector(selector);
}

function setLoading(isLoading) {
  state.loading = isLoading;
  const submitBtn = $("#analyze-btn");
  submitBtn.disabled = isLoading;
  submitBtn.textContent = isLoading ? "분석 중..." : "분석 요청";
  $("#status").textContent = isLoading ? "AI가 기사를 읽고 있어요" : "준비 완료";
  $(".dot").style.visibility = isLoading ? "visible" : "hidden";
}

function renderSentiment(sentiment) {
  const pill = $("#sentiment-pill");
  pill.className = `sentiment-pill ${sentiment}`;
  pill.textContent = sentiment ?? "-";
}

function renderKeyPoints(points) {
  const list = $("#keypoints");
  list.innerHTML = "";
  points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });
}

async function handleAnalyze(event) {
  event.preventDefault();
  const article = $("#article").value.trim();
  if (!article) {
    alert("기사 내용을 입력해주세요.");
    return;
  }
  setLoading(true);
  try {
    const res = await analyzeNewsMock({ article });
    state.sentiment = res.sentiment;
    state.keyPoints = res.key_points;
    renderSentiment(res.sentiment);
    renderKeyPoints(res.key_points);
  } catch (err) {
    alert("모의 분석 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
    console.error(err);
  } finally {
    setLoading(false);
  }
}

function fillSample() {
  const sample = `미 연준이 기준금리를 동결하면서 기술주와 성장주 중심의 반등이 이어지고 있습니다. \n\n국내에서는 생성형 AI 경쟁이 심화되며 관련 대기업들의 투자 확대가 감지됩니다. 전문가들은 단기 변동성에 유의하면서도 2분기 실적 시즌에 대한 기대가 높다고 분석합니다.`;
  $("#article").value = sample;
}

function main() {
  $("#demo-form").addEventListener("submit", handleAnalyze);
  $("#fill-sample").addEventListener("click", fillSample);
  renderSentiment("positive");
  renderKeyPoints(sampleAnalysis.key_points);
}

main();
