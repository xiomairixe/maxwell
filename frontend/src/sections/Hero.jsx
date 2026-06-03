import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './Hero.css';

/* ─── Sparkline SVG ─── */
function Sparkline({ color = '#6366f1', points: pts }) {
  const data = pts || [20, 35, 28, 50, 42, 60, 55, 72, 65, 80];
  const w = 100, h = 28;
  const max = Math.max(...data);
  const coords = data.map((p, i) => [
    (i / (data.length - 1)) * w,
    h - (p / max) * (h - 4) - 2,
  ]);
  const d = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const fill = `${d} L${w},${h} L0,${h} Z`;
  const id = `sg${color.replace(/[^a-z0-9]/gi, '')}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="dc-sparkline" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Live counter ─── */
function useCounter(target, duration = 1600, active = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const step = target / (duration / 16);
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration, active]);
  return val;
}

/* ─── Stat card ─── */
function StatCard({ label, target, prefix = '', suffix = '', color, sparkPts, badge = '+12%', delay = 0 }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const val = useCounter(target, 1600, active);
  return (
    <div className="dc-stat-card">
      <div className="dc-stat-top">
        <span className="dc-stat-label">{label}</span>
        <span className="dc-stat-badge" style={{ color, background: `${color}18` }}>{badge}</span>
      </div>
      <div className="dc-stat-num" style={{ color }}>
        {prefix}{val.toLocaleString()}{suffix}
      </div>
      <Sparkline color={color} points={sparkPts} />
    </div>
  );
}

/* ─── Donut ring ─── */
function DonutRing({ pct, color, label, value }) {
  const r = 20, c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="dc-donut-wrap">
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
        <circle cx="26" cy="26" r={r} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
          transform="rotate(-90 26 26)" className="dc-ring-fill" />
        <text x="26" y="30" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff"
          fontFamily="'Sora',sans-serif">{pct}%</text>
      </svg>
      <div className="dc-donut-meta">
        <span className="dc-donut-val">{value}</span>
        <span className="dc-donut-lbl">{label}</span>
      </div>
    </div>
  );
}

/* ─── Activity item ─── */
function ActivityItem({ icon, title, sub, time, color }) {
  return (
    <div className="dc-activity-item">
      <div className="dc-act-icon" style={{ background: color }}>{icon}</div>
      <div className="dc-act-body">
        <span className="dc-act-title">{title}</span>
        <span className="dc-act-sub">{sub}</span>
      </div>
      <span className="dc-act-time">{time}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ambient bg */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      {/* ── centered copy ── */}
      <div className="hero-copy">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for new projects
        </div>

        <h1 className="hero-title">
          Building Digital Solutions<br />
          That <span className="gradient-text">Drive Results</span>
        </h1>

        <p className="hero-subtitle">
          We are a freelance team specializing in web development, software solutions,<br />
          UI/UX design, and digital innovation.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start a Project <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-ghost">
            <Calendar size={16} />
            Book a Free Consultation
          </a>
        </div>
      </div>

      {/* ── dashboard card ── */}
      <div className="hero-dashboard-wrap">
        <div className="hero-dashboard">
          {/* browser chrome */}
          <div className="dash-chrome">
            <div className="dash-dots">
              <span /><span /><span />
            </div>
            <div className="dash-url">app.dashboard.io / overview</div>
            <div className="dash-chrome-r"><span /><span /></div>
          </div>

          <div className="dash-body">
            {/* sidebar */}
            <nav className="dash-sidebar">
              <div className="dash-logo">
                <div className="dash-logo-icon" />
                <span>Dashboard</span>
              </div>
              {[
                { icon: '◈', label: 'Overview', active: true },
                { icon: '⬡', label: 'Analytics' },
                { icon: '◉', label: 'Projects' },
                { icon: '◎', label: 'Clients' },
                { icon: '⬢', label: 'Reports' },
                { icon: '◇', label: 'Settings' },
              ].map(({ icon, label, active }) => (
                <div key={label} className={`dash-nav-item${active ? ' active' : ''}`}>
                  <span className="dash-nav-icon">{icon}</span>
                  <span className="dash-nav-label">{label}</span>
                </div>
              ))}
            </nav>

            {/* main */}
            <main className="dash-main">
              {/* topbar */}
              <div className="dash-topbar">
                <div className="dash-topbar-l">
                  <span className="dash-page-title">Overview</span>
                  <span className="dash-date">June 2026</span>
                </div>
                <div className="dash-topbar-r">
                  <div className="dash-search">
                    <span>🔍</span>
                    <span className="dash-search-ph">Search...</span>
                  </div>
                  <div className="dash-avatar">JD</div>
                </div>
              </div>

              {/* stat row */}
              <div className="dash-stats-row">
                <StatCard label="Total Revenue" target={128400} prefix="$" color="#6366f1"
                  sparkPts={[20,35,28,52,44,62,56,74,66,82]} badge="+12%" delay={200} />
                <StatCard label="Active Projects" target={48} color="#22d3ee"
                  sparkPts={[10,22,18,35,28,42,38,50,45,56]} badge="+8%" delay={380} />
                <StatCard label="Clients" target={312} color="#a855f7"
                  sparkPts={[30,45,38,58,50,70,62,80,72,90]} badge="+15%" delay={560} />
                <StatCard label="Success Rate" target={99} suffix="%" color="#f59e0b"
                  sparkPts={[70,75,72,80,78,85,83,90,88,95]} badge="+3%" delay={740} />
              </div>

              {/* mid row */}
              <div className="dash-mid-row">
                {/* bar chart */}
                <div className="dash-card">
                  <div className="dash-card-hd">
                    <span className="dash-card-title">Revenue 2026</span>
                    <div className="dash-legend">
                      <span className="legend-dot" style={{ background: '#6366f1' }} />
                      <span className="legend-lbl">Monthly</span>
                    </div>
                  </div>
                  <div className="dc-bar-chart">
                    {[38,55,42,72,60,88,65,94,78,85,70,96].map((h, i) => (
                      <div key={i} className="dc-bar-col">
                        <div className="dc-bar" style={{ '--bar-h': `${h}%`, animationDelay: `${i * 0.07}s` }} />
                        <span className="dc-bar-lbl">
                          {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* donuts */}
                <div className="dash-card dash-card-dark">
                  <div className="dash-card-hd">
                    <span className="dash-card-title" style={{ color: '#e2e8f0' }}>By Service</span>
                  </div>
                  <div className="dc-donuts">
                    <DonutRing pct={78} color="#6366f1" label="Web Dev" value="37 proj" />
                    <DonutRing pct={54} color="#22d3ee" label="Design" value="18 proj" />
                    <DonutRing pct={43} color="#a855f7" label="IT Support" value="14 proj" />
                  </div>
                </div>
              </div>

              {/* bottom row */}
              <div className="dash-bottom-row">
                {/* activity */}
                <div className="dash-card">
                  <div className="dash-card-hd">
                    <span className="dash-card-title">Recent Activity</span>
                    <span className="dash-view-all">View all</span>
                  </div>
                  <ActivityItem icon="✓" title="E-commerce site deployed" sub="Client: Shopify Co." time="2m" color="#22c55e22" />
                  <ActivityItem icon="⬆" title="New proposal sent" sub="React Dashboard" time="1h" color="#6366f122" />
                  <ActivityItem icon="★" title="5-star review received" sub="Website Redesign" time="3h" color="#f59e0b22" />
                  <ActivityItem icon="🔒" title="Security audit complete" sub="API hardening" time="1d" color="#a855f722" />
                </div>

                {/* sprints */}
                <div className="dash-card">
                  <div className="dash-card-hd">
                    <span className="dash-card-title">Active Sprints</span>
                    <span className="dash-view-all">+ New</span>
                  </div>
                  {[
                    { label: 'API Integration', pct: 85, color: '#6366f1' },
                    { label: 'UI Redesign', pct: 60, color: '#22d3ee' },
                    { label: 'Database Opt.', pct: 92, color: '#a855f7' },
                    { label: 'Mobile App', pct: 34, color: '#f59e0b' },
                  ].map(({ label, pct, color }) => (
                    <div key={label} className="dc-task-row">
                      <div className="dc-task-meta">
                        <span className="dc-task-name">{label}</span>
                        <span className="dc-task-pct" style={{ color }}>{pct}%</span>
                      </div>
                      <div className="dc-task-track">
                        <div className="dc-task-fill" style={{ '--tw': `${pct}%`, background: color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* team */}
                <div className="dash-card">
                  <div className="dash-card-hd">
                    <span className="dash-card-title">Team</span>
                    <span className="dash-view-all">Manage</span>
                  </div>
                  {[
                    { initials: 'JD', name: 'Jane Dela Cruz', role: 'Full-Stack', color: '#6366f1', status: '#22d3ee' },
                    { initials: 'MR', name: 'Marco Reyes', role: 'UI/UX Design', color: '#a855f7', status: '#4ade80' },
                    { initials: 'SL', name: 'Sofia Lim', role: 'DevOps / AWS', color: '#22d3ee', status: '#4ade80' },
                    { initials: 'AV', name: 'Alex Villena', role: 'Cybersecurity', color: '#f59e0b', status: '#f59e0b' },
                  ].map(({ initials, name, role, color, status }) => (
                    <div key={initials} className="dc-team-row">
                      <div className="dc-team-avatar" style={{ background: `${color}22`, color }}>
                        {initials}
                        <span className="dc-team-status" style={{ background: status }} />
                      </div>
                      <div className="dc-team-info">
                        <span className="dc-team-name">{name}</span>
                        <span className="dc-team-role">{role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}