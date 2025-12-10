import { Button } from "@/components/ui/button";
import { Zap, Play, BarChart3, Activity, Cpu, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import logo from "@/assets/logo.png";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Realistic 24-hour UK energy data with typical patterns
const forecastData = [
  { hour: '00h', load: 28.5, pv: 0, price: 8.2 },
  { hour: '01h', load: 26.8, pv: 0, price: 7.8 },
  { hour: '02h', load: 25.2, pv: 0, price: 7.5 },
  { hour: '03h', load: 24.1, pv: 0, price: 7.2 },
  { hour: '04h', load: 23.8, pv: 0, price: 7.1 },
  { hour: '05h', load: 25.4, pv: 0, price: 7.4 },
  { hour: '06h', load: 32.1, pv: 0.8, price: 12.5 },
  { hour: '07h', load: 41.2, pv: 2.1, price: 18.3 },
  { hour: '08h', load: 48.6, pv: 4.2, price: 24.7 },
  { hour: '09h', load: 45.3, pv: 8.5, price: 21.4 },
  { hour: '10h', load: 42.1, pv: 12.6, price: 18.9 },
  { hour: '11h', load: 39.8, pv: 16.2, price: 16.2 },
  { hour: '12h', load: 38.2, pv: 18.5, price: 14.8 },
  { hour: '13h', load: 37.9, pv: 19.1, price: 14.5 },
  { hour: '14h', load: 38.8, pv: 17.8, price: 15.1 },
  { hour: '15h', load: 40.2, pv: 15.4, price: 16.8 },
  { hour: '16h', load: 43.1, pv: 11.2, price: 19.5 },
  { hour: '17h', load: 47.8, pv: 6.8, price: 26.4 },
  { hour: '18h', load: 52.3, pv: 2.1, price: 32.8 },
  { hour: '19h', load: 54.7, pv: 0.3, price: 35.2 },
  { hour: '20h', load: 51.2, pv: 0, price: 31.6 },
  { hour: '21h', load: 46.8, pv: 0, price: 28.1 },
  { hour: '22h', load: 39.4, pv: 0, price: 22.3 },
  { hour: '23h', load: 33.1, pv: 0, price: 15.7 },
];
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy-green-light border border-primary/20 mb-8 animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              The Future of Clean Energy, Powered by Explainable AI
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up animation-delay-100">
            Smarter Energy
            <br />
            Systems Start Here
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            <span className="text-primary font-medium">Energentic</span>'s
            Agent-as-a-Service platform empowers infrastructure operators and
            energy developers with modular, transparent AI agents—for
            forecasting, optimisation, control, and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <WaitlistDialog>
              <Button variant="hero" size="xl" className="gap-2">
                <Zap className="w-5 h-5" />
                Join Waitlist
              </Button>
            </WaitlistDialog>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/#video" className="gap-2">
                <Play className="w-5 h-5" />
                Watch Demo Video
              </Link>
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-up animation-delay-400">
          <div className="relative bg-card rounded-2xl shadow-prominent border border-border overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <img src={logo} alt="Energentic" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Energentic</p>
                  <p className="text-xs text-muted-foreground">AI Energy Platform</p>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:block w-56 border-r border-border bg-muted/20 p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Main Navigation
                </p>
                <nav className="space-y-1">
                  {[
                    { icon: BarChart3, label: "Dashboard", active: true },
                    { icon: LineChart, label: "Energy Management" },
                    { icon: Activity, label: "Agentic Workflow" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                        item.active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  ))}
                </nav>

                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-6 mb-4">
                  AI Agents
                </p>
                <nav className="space-y-1">
                  {["ForecastAgent", "OptimizeAgent", "ControlAgent", "ExplainAgent"].map(
                    (label, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted"
                      >
                        <Cpu className="w-4 h-4" />
                        {label}
                      </div>
                    )
                  )}
                </nav>
              </div>

              {/* Main Panel */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Main Dashboard
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Live
                    </span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-muted/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      24h Energy Forecast
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Real-time
                    </span>
                  </div>
                  
                  {/* Recharts Line Chart */}
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={forecastData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                        <XAxis 
                          dataKey="hour" 
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={9}
                          interval={3}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis 
                          stroke="hsl(var(--muted-foreground))" 
                          fontSize={9}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--foreground))',
                            fontSize: '12px'
                          }}
                          formatter={(value: number, name: string) => {
                            if (name === 'Price (p/kWh)') {
                              return [`${value}p`, name];
                            }
                            return [value, name];
                          }}
                        />
                        <Legend 
                          wrapperStyle={{ fontSize: '10px' }}
                          iconSize={8}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="load" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name="Load (kW)"
                          dot={false}
                          activeDot={{ r: 4, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="pv" 
                          stroke="#10b981" 
                          strokeWidth={2}
                          name="PV (kW)"
                          dot={false}
                          activeDot={{ r: 4, stroke: '#10b981', strokeWidth: 2 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="#f59e0b" 
                          strokeWidth={2}
                          name="Price (p/kWh)"
                          dot={false}
                          activeDot={{ r: 4, stroke: '#f59e0b', strokeWidth: 2 }}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        AI Interface
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-600 rounded-full">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Processing real-time data streams
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Control Status
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-600 rounded-full">
                        Discharging
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Battery optimization in progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
