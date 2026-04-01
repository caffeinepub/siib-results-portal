import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Phone, Printer, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type View = "lookup" | "letter";

const NAV_ITEMS = [
  "Home",
  "Programs",
  "Admissions",
  "Research",
  "Placements",
  "About Us",
  "Contact",
];
const FOOTER_QUICK = ["Home", "News & Events", "Alumni", "Careers"];
const FOOTER_PROGRAMS = ["MBA (IB)", "PGDM", "Executive MBA", "PhD"];
const FOOTER_ADMISSIONS = [
  "Apply Now",
  "Eligibility",
  "Fee Structure",
  "Scholarships",
];

function NavLink({ label, ocid }: { label: string; ocid: string }) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      className="text-primary-foreground/85 hover:text-primary-foreground transition-colors text-sm font-medium bg-transparent border-0 cursor-pointer"
    >
      {label}
    </button>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <button
        type="button"
        className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-sm text-white/80"
      >
        {label}
      </button>
    </li>
  );
}

function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-extrabold tracking-widest text-primary-foreground select-none">
              SIIB
            </span>
            <nav className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item}
                  label={item}
                  ocid={`nav.${item.toLowerCase().replace(" ", "_")}.link`}
                />
              ))}
            </nav>
          </div>
          <button
            type="button"
            data-ocid="nav.login.button"
            className="bg-white text-primary font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.18_0.01_30)] text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_QUICK.map((l) => (
                <FooterLink key={l} label={l} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
              Programs
            </h3>
            <ul className="space-y-2">
              {FOOTER_PROGRAMS.map((l) => (
                <FooterLink key={l} label={l} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
              Admissions
            </h3>
            <ul className="space-y-2">
              {FOOTER_ADMISSIONS.map((l) => (
                <FooterLink key={l} label={l} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={13} /> admissions@siib.ac.in
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} /> +91-20-28116959
              </li>
              <li>Hinjewadi, Pune - 411 057</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {year} Symbiosis Institute of International Business. All
          rights reserved. | Built with &#10084;&#65039; using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function LookupView({ onSubmit }: { onSubmit: (appNo: string) => void }) {
  const [appNo, setAppNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appNo.trim()) {
      setError("Please enter your application number.");
      return;
    }
    setError("");
    onSubmit(appNo.trim());
  };

  return (
    <main className="flex-1 bg-background py-14">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">
            Admissions Portal
          </p>
          <h1 className="text-3xl font-extrabold text-primary mb-1">
            Admissions Result Portal
          </h1>
          <p className="text-lg font-semibold text-primary/80 mb-8">
            Batch 2026-28
          </p>

          <Card className="shadow-lg border border-border">
            <CardHeader className="pb-4 border-b border-border">
              <CardTitle className="text-xl text-primary">
                Application Number Lookup
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Enter your Application Number to check your result
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="appno"
                    className="font-semibold text-foreground"
                  >
                    Application Number
                  </Label>
                  <Input
                    id="appno"
                    data-ocid="lookup.input"
                    placeholder="e.g. SIIB2026001"
                    value={appNo}
                    onChange={(e) => setAppNo(e.target.value)}
                    className="border-input focus-visible:ring-primary"
                  />
                  {error && (
                    <p
                      data-ocid="lookup.error_state"
                      className="text-sm text-destructive font-medium"
                    >
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  data-ocid="lookup.submit_button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  <Search size={16} className="mr-2" />
                  Check Result
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 rounded-lg bg-accent/60 border border-primary/10 text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Results are based
            on the Symbiosis National Aptitude (SNAP) Test scores, academic
            background, work experience, and Personal Interaction (PI)
            performance.
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function RejectionLetterView({
  appNo,
  onBack,
}: { appNo: string; onBack: () => void }) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="flex-1 bg-background py-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="button"
            onClick={onBack}
            data-ocid="letter.back.button"
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm mb-6 transition-colors bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Application Lookup
          </button>

          <h1 className="text-2xl font-extrabold text-primary mb-6">
            Application Status - Batch 2026-28
          </h1>

          {/* Status Alert */}
          <div
            data-ocid="letter.error_state"
            className="bg-[oklch(0.95_0.04_22)] border border-primary/30 rounded-lg px-5 py-4 mb-6 flex items-start gap-3"
          >
            <span className="text-primary font-bold text-lg mt-0.5">
              &#9888;
            </span>
            <div>
              <p className="font-bold text-primary">
                Application Status: Not Selected for Batch 2026-28
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Status for Application Number:{" "}
                <span className="font-semibold text-foreground">{appNo}</span>
              </p>
            </div>
          </div>

          {/* Letter Card */}
          <Card
            data-ocid="letter.card"
            className="shadow-xl border border-border rounded-lg overflow-hidden"
          >
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-primary-foreground text-xl font-extrabold tracking-widest">
                  SIIB
                </p>
                <p className="text-primary-foreground/80 text-xs mt-0.5">
                  Symbiosis Institute of International Business
                </p>
              </div>
              <div className="text-right text-primary-foreground/70 text-xs">
                <p>Hinjewadi, Pune - 411 057</p>
                <p>admissions@siib.ac.in | +91-20-28116959</p>
              </div>
            </div>

            <CardContent className="px-8 py-8 bg-white">
              <div className="font-mono text-xs text-muted-foreground mb-6 border-b border-border pb-4">
                Ref: {appNo} | Date: {today}
              </div>

              <div className="space-y-4 text-[0.93rem] leading-relaxed text-foreground">
                <p>
                  <strong>Date:</strong> {today}
                </p>

                <div>
                  <p>To,</p>
                  <p className="font-semibold">ANSH ARYA</p>
                </div>

                <p>
                  <strong>
                    Subject: Admission Result - MBA (International Business) -
                    Batch 2026-28
                  </strong>
                </p>

                <p>
                  Dear <strong>ANSH ARYA</strong>,
                </p>

                <p>
                  We regret to inform you that after careful evaluation of your
                  application and performance in the Symbiosis National Aptitude
                  (SNAP) Test and Personal Interaction (PI) process, you have
                  not been selected for admission to the MBA (International
                  Business) programme at Symbiosis Institute of International
                  Business (SIIB), Pune for the academic year{" "}
                  <strong>2026-28</strong>.
                </p>

                <p>
                  The selection process was highly competitive this year, and
                  the final merit list was prepared based on multiple parameters
                  including SNAP scores, academic background, work experience,
                  extracurricular achievements, and PI performance.
                </p>

                <p>
                  We appreciate your interest in SIIB and the effort you put
                  into the admission process. We encourage you to explore other
                  opportunities and wish you all the best in your future
                  endeavors.
                </p>

                <p>
                  For any queries regarding your application, please feel free
                  to contact the Admissions Office at{" "}
                  <a
                    href="mailto:admissions@siib.ac.in"
                    className="text-primary underline"
                  >
                    admissions@siib.ac.in
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:+912028116959" className="text-primary">
                    +91-20-28116959
                  </a>
                  .
                </p>

                <div className="pt-4">
                  <p>Yours sincerely,</p>
                  <div className="mt-8 pt-4 border-t border-border">
                    <p className="font-semibold">Admissions Committee</p>
                    <p>Symbiosis Institute of International Business (SIIB)</p>
                    <p>Pune - 411 016, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              onClick={() => window.print()}
              data-ocid="letter.download.button"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Printer size={15} className="mr-2" />
              Download / Print Letter
            </Button>
            <Button
              onClick={onBack}
              data-ocid="letter.back_secondary.button"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ArrowLeft size={15} className="mr-2" />
              Back to Application Lookup
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function App() {
  const [view, setView] = useState<View>("lookup");
  const [appNo, setAppNo] = useState("");

  const handleLookup = (no: string) => {
    setAppNo(no);
    setView("letter");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {view === "lookup" ? (
        <LookupView onSubmit={handleLookup} />
      ) : (
        <RejectionLetterView appNo={appNo} onBack={() => setView("lookup")} />
      )}
      <Footer />
    </div>
  );
}
