"use client";

import { ArticleForm } from "./ArticleForm";
import { ResultPanel } from "./ResultPanel";
import { useAnalyzeNews } from "../hooks/useAnalyzeNews";
import { sampleAnalysis } from "../api/sampleAnalysis";

export function NewsAnalyzer() {
  const {
    article,
    setArticle,
    result,
    loading,
    status,
    handleAnalyze,
    fillSample,
  } = useAnalyzeNews();

  return (
    <div className="space-y-6">
      <ArticleForm
        article={article}
        onChange={setArticle}
        onSubmit={handleAnalyze}
        onFillSample={fillSample}
        loading={loading}
        status={status}
      />
      <ResultPanel result={result ?? sampleAnalysis} />
      <p className="text-center text-sm text-muted-foreground">
        현재 페이지는 Mock API로 동작합니다. FastAPI 실서버가 준비되면 API
        호출 부분만 교체하면 됩니다.
      </p>
    </div>
  );
}
