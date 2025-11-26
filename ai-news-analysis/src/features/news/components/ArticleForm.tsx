"use client";

import type { FormEvent } from "react";

interface ArticleFormProps {
  article: string;
  onChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  onFillSample: () => void;
  loading: boolean;
  status: string;
}

export function ArticleForm({
  article,
  onChange,
  onSubmit,
  onFillSample,
  loading,
  status,
}: ArticleFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void onSubmit();
  };

  const dotClass = loading
    ? "bg-primary"
    : "bg-muted-foreground/50 dark:bg-muted-foreground/70";

  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-3 border-b pb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-6 w-6"
          >
            <path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
            <path d="M9 4v4h6V4" />
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-foreground">기사 입력</p>
          <p className="text-sm text-muted-foreground">
            분석할 금융 뉴스 기사를 입력하세요
          </p>
        </div>
      </div>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <textarea
          value={article}
          onChange={(event) => onChange(event.target.value)}
          placeholder="금융 기사 전문을 붙여 넣고 AI 분석을 실행해 보세요."
          className="min-h-[220px] w-full rounded-2xl border border-input bg-background/80 px-4 py-3 text-base text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
          >
            {loading ? "AI 분석 중..." : "AI 분석 시작"}
          </button>
          <button
            type="button"
            onClick={onFillSample}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-2xl border border-border px-5 py-3 text-base font-semibold text-foreground hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
          >
            샘플 기사 채우기
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className={`h-2 w-2 rounded-full ${dotClass} animate-in`} />
            {status}
          </div>
        </div>
      </form>
    </section>
  );
}
