
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Server, Monitor } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ServerData {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  hostname?: string;
  ip?: string;
  port?: number;
  motd?: {
    clean?: string[];
  };
}

const fetchServerStatus = async (): Promise<ServerData> => {
  try {
    const response = await fetch('https://api.mcsrvstat.us/3/EvolutionMC.ititan.org');
    if (!response.ok) {
      throw new Error('Failed to fetch server status');
    }
    const data = await response.json();
    console.log('Server data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching server status:', error);
    toast({
      title: "Connection Error",
      description: "Unable to fetch server status. Showing demo data.",
      variant: "destructive",
    });
    // Return demo data on error
    return {
      online: true,
      players: { online: 42, max: 100 },
      version: "1.20.4",
      hostname: "EvolutionMC.ititan.org",
      motd: { clean: ["Welcome to EvolutionMC", "The ultimate survival experience!"] }
    };
  }
};

export const ServerStatus = () => {
  const { data: serverData, isLoading, error } = useQuery({
    queryKey: ['serverStatus'],
    queryFn: fetchServerStatus,
    refetchInterval: 30000, // Refetch every 30 seconds
    refetchIntervalInBackground: true,
  });

  const playerPercentage = serverData?.players 
    ? (serverData.players.online / serverData.players.max) * 100 
    : 0;

  return (
    <Card className="glass-effect border-gaming-green/30 hover:border-gaming-green/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gaming-green">
          <Server className="w-6 h-6" />
          <span>Server Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-slate-300">Status</span>
          <div className="flex items-center space-x-2">
            <div 
              className={`w-3 h-3 rounded-full ${
                serverData?.online ? 'bg-gaming-green animate-pulse-green' : 'bg-red-500'
              }`}
            />
            <Badge 
              variant={serverData?.online ? "default" : "destructive"}
              className={serverData?.online ? "bg-gaming-green text-gaming-dark" : ""}
            >
              {isLoading ? "Checking..." : serverData?.online ? "Online" : "Offline"}
            </Badge>
          </div>
        </div>

        {serverData?.players && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Players Online</span>
              </span>
              <span className="text-2xl font-bold text-gaming-green minecraft-font">
                {serverData.players.online}/{serverData.players.max}
              </span>
            </div>
            <Progress 
              value={playerPercentage} 
              className="h-3"
            />
            <p className="text-sm text-slate-400 text-center">
              {Math.round(playerPercentage)}% capacity
            </p>
          </div>
        )}

        {serverData?.version && (
          <div className="flex items-center justify-between">
            <span className="text-slate-300 flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span>Version</span>
            </span>
            <Badge variant="outline" className="border-gaming-blue text-gaming-blue">
              {serverData.version}
            </Badge>
          </div>
        )}

        {serverData?.hostname && (
          <div className="bg-gaming-dark-light/50 p-4 rounded-lg border border-gaming-green/20">
            <p className="text-sm text-slate-400 mb-1">Server Address</p>
            <code className="text-gaming-green font-mono text-lg">
              {serverData.hostname}
            </code>
          </div>
        )}

        {serverData?.motd?.clean && serverData.motd.clean.length > 0 && (
          <div className="bg-gaming-dark-light/50 p-4 rounded-lg border border-gaming-blue/20">
            <p className="text-sm text-slate-400 mb-2">Message of the Day</p>
            {serverData.motd.clean.map((line, index) => (
              <p key={index} className="text-slate-300">
                {line}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
