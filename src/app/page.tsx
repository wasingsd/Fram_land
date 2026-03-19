import { TrendingUp, TrendingDown, ArrowRight, Star, Map as MapIcon, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockKPIs, mockInsights, mockFavoriteActions, mockTransactions } from "@/lib/mockData";
import { formatCurrency, formatDate } from "@/lib/utils";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">สวัสดีครับ, คุณพงษ์</h2>
          <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
            <Calendar className="w-4 h-4" /> {formatDate(new Date())}
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {mockKPIs.map((kpi) => (
          <Card key={kpi.label} className="overflow-hidden">
            <CardContent className="p-4">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{kpi.label}</p>
              <div className="flex items-end justify-between mt-1">
                <h3 className="text-xl font-bold text-slate-900">{formatCurrency(kpi.value)}</h3>
                <div className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  kpi.change >= 0 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  {kpi.change >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {Math.abs(kpi.change)}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mini Map Card */}
      <Card className="overflow-hidden bg-slate-100 border-none relative h-40">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 z-0"></div>
        <CardHeader className="relative z-10 flex flex-row items-center justify-between">
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <MapIcon className="w-5 h-5 text-primary-600" /> แผนที่สวนย่อ
          </CardTitle>
          <Link href="/map" className="text-xs font-bold text-primary-700 bg-white px-3 py-1.5 rounded-full shadow-sm">
            ขยายแผนที่
          </Link>
        </CardHeader>
        <CardContent className="relative z-10 flex items-center justify-center h-full -mt-4">
           {/* Mock Map Shapes */}
           <div className="flex gap-2">
             <div className="w-16 h-12 bg-green-500/40 rounded-lg border-2 border-green-600/50 flex items-center justify-center text-[8px] font-bold text-green-900">พืช</div>
             <div className="w-12 h-16 bg-orange-500/40 rounded-lg border-2 border-orange-600/50 flex items-center justify-center text-[8px] font-bold text-orange-900">สัตว์</div>
             <div className="w-20 h-14 bg-sky-500/40 rounded-lg border-2 border-sky-600/50 flex items-center justify-center text-[8px] font-bold text-sky-900">น้ำ</div>
           </div>
        </CardContent>
      </Card>

      {/* Today Summary */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">สรุปวันนี้</h3>
          <button className="text-xs font-bold text-primary-600">ดูทั้งหมด</button>
        </div>
        <div className="space-y-2">
          {mockTransactions.slice(0, 3).map((tx) => (
            <Card key={tx.id} className="border-slate-50">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === 'sell' ? 'bg-green-100 text-green-600' : 
                    tx.type === 'buy' ? 'bg-orange-100 text-orange-600' : 
                    'bg-slate-100 text-slate-600'
                  }`}>
                    <ArrowRight className={`w-5 h-5 ${tx.type === 'buy' ? 'rotate-180' : ''}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{tx.title}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{formatDate(tx.date)}</p>
                  </div>
                </div>
                <p className={`text-sm font-bold ${
                  tx.type === 'sell' ? 'text-green-600' : 'text-slate-900'
                }`}>
                  {tx.type === 'sell' ? '+' : '-'}{formatCurrency(tx.amount)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Insight Section */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">ข้อมูลแนะนำ (Insight)</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {mockInsights.map((insight, i) => (
            <Card key={i} className="min-w-[240px] bg-primary-900 text-white border-none shadow-lg">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center mb-3 text-primary-200">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium leading-relaxed">{insight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Favorite Actions */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">รายการโปรด</h3>
        <div className="grid grid-cols-2 gap-3">
          {mockFavoriteActions.map((action, i) => (
            <button 
              key={i}
              className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-bold text-slate-800">{action.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
