import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Brain,
  CheckCircle2,
  FileText,
  Inbox,
  Mail,
  Search,
  Sparkles,
  TrendingUp,
  UploadCloud,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function DocumentAIApp() {
  const [query, setQuery] = useState("");

  const emails = [
    {
      id: 1,
      sender: "cliente1@empresa.com",
      name: "Cliente XPTO",
      status: "ok",
      total: "R$ 12.000",
      docs: 3,
      company: "XPTO Comércio",
    },
    {
      id: 2,
      sender: "financeiro@abc.com",
      name: "Empresa ABC",
      status: "late",
      total: "R$ 0",
      docs: 0,
      company: "ABC Industrial",
    },
    {
      id: 3,
      sender: "contato@logistica.com",
      name: "Logística BR",
      status: "ok",
      total: "R$ 8.500",
      docs: 2,
      company: "Logística BR",
    },
  ];

  const lateEmails = useMemo(
    () => emails.filter((email) => email.status === "late"),
    [emails],
  );

  const metrics = [
    {
      title: "Emails Processados",
      value: "1.284",
      description: "+12% esta semana",
      icon: Mail,
    },
    {
      title: "Notas Extraídas",
      value: "326",
      description: "OCR + IA ativos",
      icon: FileText,
    },
    {
      title: "Atrasos Detectados",
      value: `${lateEmails.length}`,
      description: "necessitam follow-up",
      icon: AlertTriangle,
    },
    {
      title: "Valor Total",
      value: "R$ 184.500",
      description: "documentos recebidos",
      icon: TrendingUp,
    },
  ];

  const documents = [
    {
      id: 1,
      title: "NF vinculada #1048",
      client: "Cliente XPTO",
      value: "R$ 12.000",
      type: "Nota Fiscal",
    },
    {
      id: 2,
      title: "NF vinculada #1049",
      client: "Logística BR",
      value: "R$ 8.500",
      type: "Nota Fiscal",
    },
    {
      id: 3,
      title: "Boleto #8821",
      client: "Cliente XPTO",
      value: "R$ 3.240",
      type: "Financeiro",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-[#eef3ff] via-[#f7f9fc] to-[#eef2f7]">
      <div className="grid h-full grid-cols-12 gap-6 p-4 lg:p-6">
        {/* Sidebar */}
        <aside className="col-span-12 h-full min-h-0 lg:col-span-3 xl:col-span-2">
          <div className="flex h-full min-h-0 flex-col rounded-[28px] border border-white/50 bg-[#16203D] p-6 text-white shadow-[0_20px_80px_rgba(22,32,61,0.35)]">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3167FF] shadow-lg shadow-blue-900/30">
                <Brain size={22} />
              </div>
              <div>
                <h1 className="text-xl font-bold">MailDoc AI</h1>
                <p className="text-xs text-white/60">Document intelligence</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              {[
                "Dashboard",
                "Emails",
                "Documentos",
                "Alertas",
                "Insights IA",
                "Configurações",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                    index === 0
                      ? "bg-white/12 text-white shadow-inner"
                      : "text-white/70 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#3167FF]" />
                  {item}
                </button>
              ))}
            </nav>

            <div className="mt-auto  rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-300" />
                <p className="text-sm font-medium">IA em execução</p>
              </div>
              <p className="text-xs leading-6 text-white/65">
                Extração automática de anexos, leitura contextual de e-mails e
                detecção de pendências.
              </p>
              <Button className="mt-4  rounded-xl text-[12px] bg-[#3167FF] hover:bg-[#2759ec]">
                <UploadCloud size={8} className="" />
                Enviar documentos
              </Button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 grid h-full min-h-0 grid-rows-[auto_auto_1fr] gap-6 lg:col-span-9 xl:col-span-10">
          {/* Top Header */}
          <div className="flex flex-col gap-4 rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-[#3167FF]">
                Painel operacional
              </p>
              <h2 className="text-2xl font-bold text-[#16203D] lg:text-3xl">
                Processamento inteligente de e-mails e documentos
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Centralize notas fiscais, acompanhe pendências e use IA para
                identificar atrasos e oportunidades.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="rounded-xl border-slate-200 bg-white"
              >
                <Mail size={16} className="mr-2" />
                Caixa de entrada
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-slate-200 bg-white"
              >
                <Bell size={16} className="mr-2" />
                Notificações
              </Button>
              <Button className="rounded-xl bg-[#3167FF] px-5 hover:bg-[#2759ec]">
                Sincronizar Emails
              </Button>
            </div>
          </div>

          {/* Search */}
          <Card className="overflow-hidden rounded-[28px] border-0 bg-gradient-to-r from-[#16203D] via-[#1c2950] to-[#3167FF] text-white shadow-[0_20px_60px_rgba(49,103,255,0.22)]">
            <CardContent className="p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
                <div>
                  <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide">
                    Busca semântica com IA
                  </div>

                  <h3 className="text-2xl font-bold lg:text-3xl">
                    Pergunte ao sistema o que está pendente
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                    Consulte atrasos, valores acima de um limite, documentos
                    ausentes ou comportamentos fora do padrão em segundos.
                  </p>

                  <div className="mt-6 flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Search size={18} />
                    </div>
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Pergunte: quem não enviou nota? notas acima de 10k..."
                      className="border-0 bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button className="rounded-xl bg-white text-[#16203D] hover:bg-slate-100">
                      Consultar
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`${item.title}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white/75">{item.title}</p>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <Icon size={18} />
                          </div>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">
                          {item.value}
                        </h3>
                        <p className="mt-1 text-xs text-white/60">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content area */}
          <div className="grid min-h-0 gap-6 xl:grid-cols-[1.1fr_.9fr]">
            {/* Left column */}
            <div className="grid min-h-0 gap-6 xl:grid-rows-[0.8fr_1.2fr]">
              {/* Alerts */}
              <Card className="min-h-0 overflow-hidden rounded-[28px] border-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <CardContent className="flex h-full min-h-0 flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-[#16203D]">
                        <AlertTriangle size={18} className="text-red-500" />
                        Atrasos detectados
                      </h3>
                      <p className="text-sm text-slate-500">
                        Empresas que ainda não enviaram documentos esperados.
                      </p>
                    </div>
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                      {lateEmails.length} pendência(s)
                    </span>
                  </div>

                  <div className="min-h-0 space-y-3 overflow-y-auto pr-2">
                    {lateEmails.map((e) => (
                      <div
                        key={`${e.id}-${e.sender}`}
                        className="flex items-start justify-between rounded-2xl border border-red-100 bg-red-50/80 p-4"
                      >
                        <div>
                          <p className="font-semibold text-[#16203D]">
                            {e.name}
                          </p>
                          <p className="text-sm text-slate-500">{e.sender}</p>
                          <p className="mt-2 text-sm text-red-600">
                            Não enviou nota fiscal no período esperado.
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="rounded-xl border-red-200 bg-white text-red-600 hover:bg-red-100"
                        >
                          Cobrar envio
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Email list */}
              <Card className="min-h-0 overflow-hidden rounded-[28px] border-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <CardContent className="flex h-full min-h-0 flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-[#16203D]">
                        <Inbox size={18} className="text-[#3167FF]" />
                        Lista de e-mails
                      </h3>
                      <p className="text-sm text-slate-500">
                        Últimos remetentes processados pelo sistema.
                      </p>
                    </div>
                    <Button variant="outline" className="rounded-xl">
                      Ver todos
                    </Button>
                  </div>

                  <div className="min-h-0 space-y-4 overflow-y-auto pr-2">
                    {emails.map((email, index) => (
                      <div
                        key={`${email.id}-${email.sender}-${index}`}
                        className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-[#3167FF]/20 hover:bg-white md:flex-row md:items-center md:justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf0ff] text-[#3167FF]">
                            <Mail size={18} />
                          </div>
                          <div>
                            <p className="font-semibold text-[#16203D]">
                              {email.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {email.sender}
                            </p>
                            <p className="text-xs text-slate-400">
                              {email.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 md:gap-8">
                          <div>
                            <p className="text-xs text-slate-400">Documentos</p>
                            <p className="font-semibold text-[#16203D]">
                              {email.docs} docs
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-slate-400">Total</p>
                            <p className="font-semibold text-[#16203D]">
                              {email.total}
                            </p>
                          </div>

                          <div>
                            {email.status === "late" ? (
                              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                                Atrasado
                              </span>
                            ) : (
                              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                                OK
                              </span>
                            )}
                          </div>

                          <Button
                            variant="outline"
                            className="rounded-xl bg-white"
                          >
                            Ver detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column */}
            <div className="grid min-h-0 gap-6 xl:grid-rows-[1fr_auto]">
              {/* Documents */}
              <Card className="min-h-0 overflow-hidden rounded-[28px] border-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <CardContent className="flex h-full min-h-0 flex-col p-6">
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-[#16203D]">
                      Documentos vinculados
                    </h3>
                    <p className="text-sm text-slate-500">
                      Anexos organizados por e-mail e extraídos automaticamente.
                    </p>
                  </div>

                  <div className="min-h-0 space-y-4 overflow-y-auto pr-2">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#3167FF]">
                              <FileText size={18} />
                            </div>
                            <div>
                              <p className="font-semibold text-[#16203D]">
                                {doc.title}
                              </p>
                              <p className="text-sm text-slate-500">
                                {doc.type}
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-[#3167FF]">
                            IA extraído
                          </span>
                        </div>

                        <div className="mb-4 flex items-center justify-between text-sm">
                          <span className="text-slate-500">{doc.client}</span>
                          <span className="font-semibold text-[#16203D]">
                            {doc.value}
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full rounded-xl bg-white"
                        >
                          Ver PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Insights */}
              <Card className="overflow-hidden rounded-[28px] border-0 bg-[#16203D] text-white shadow-[0_20px_60px_rgba(22,32,61,0.24)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Sparkles size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Insights com IA</h3>
                      <p className="text-xs text-white/55">
                        Análise automática do comportamento dos envios
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 size={16} />
                        <span className="text-sm font-medium">
                          Resumo semanal
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-white/75">
                        2 clientes estão com envio de notas atrasado. Cliente
                        XPTO representa o maior volume financeiro recebido nesta
                        semana.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-blue-300">
                        <Brain size={16} />
                        <span className="text-sm font-medium">
                          Sugestão da IA
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-white/75">
                        Priorize follow-up com Empresa ABC e configure alerta
                        automático após 48h sem recebimento de documentos.
                      </p>
                    </div>
                  </div>

                  <Button className="mt-5 w-full rounded-xl bg-[#3167FF] hover:bg-[#2759ec]">
                    Gerar relatório inteligente
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
