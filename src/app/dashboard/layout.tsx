import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardNav } from '@/components/dashboard-nav';
import { Logo } from '@/components/icons';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader>
          <div className="flex items-center gap-2.5 p-2">
            <Logo className="size-7 shrink-0 text-primary" />
            <span className="truncate text-lg font-semibold">ThreatWatch AV</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <DashboardNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
