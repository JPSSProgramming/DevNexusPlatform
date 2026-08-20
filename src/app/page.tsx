'use client';

import { useDevNexusStore } from '@/store/useDevNexusStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const { activeFile, isSidebarOpen, setActiveFile, toggleSidebar } = useDevNexusStore();

  return (
      <main className="p-8 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          DevNexusPlatform Workspace
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Тестування Zustand та Shadcn/ui</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Активний файл у редакторі: <code className="bg-muted px-2 py-1 rounded text-sm">{activeFile || 'Не вибрано'}</code>
            </p>
            <p>
              Статус сайдбару: <strong>{isSidebarOpen ? 'Відкритий 🟢' : 'Згорнутий 🔴'}</strong>
            </p>

            <div className="flex gap-3 pt-2">
              <Button onClick={toggleSidebar}>
                Переключити сайдбар
              </Button>
              <Button
                  variant="outline"
                  onClick={() => setActiveFile('src/app/api/review/route.ts')}
              >
                Змінити активний файл
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
  );
}