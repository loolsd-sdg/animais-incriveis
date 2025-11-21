import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container">
          <Button 
            variant="secondary" 
            onClick={() => setLocation("/")}
            className="mb-4"
          >
            ← Voltar para Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Informações Gerais</h2>
            <p className="text-muted-foreground mb-4">
              A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, 
              tratamento e proteção dos dados pessoais dos usuários e visitantes do site do 
              <strong> Animais Incríveis</strong>, com a finalidade de demonstrar absoluta transparência 
              quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, 
              os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Razão Social:</strong> Visite Campos<br />
              <strong>CNPJ:</strong> 52.722.772/0001-30<br />
              <strong>Endereço:</strong> Avenida Emílio Ribas, 644 - Capivari, Campos do Jordão - SP
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Como Coletamos os Dados Pessoais</h2>
            <p className="text-muted-foreground mb-4">
              Os dados pessoais do usuário são coletados quando você interage com nosso site ou 
              realiza uma compra através do WhatsApp. As informações podem incluir:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Nome completo</li>
              <li>Número de telefone (WhatsApp)</li>
              <li>Informações sobre a compra (quantidade de ingressos, tipo)</li>
              <li>Dados de navegação (cookies, endereço IP, tipo de navegador)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Para Que Utilizamos os Dados Pessoais</h2>
            <p className="text-muted-foreground mb-4">
              Os dados pessoais coletados têm as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Processar e confirmar suas reservas de ingressos</li>
              <li>Entrar em contato para confirmação de compra via WhatsApp</li>
              <li>Enviar informações sobre o evento e atualizações</li>
              <li>Melhorar a experiência do usuário no site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Realizar análises estatísticas e de desempenho do site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground mb-4">
              Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para 
              fins de marketing. Seus dados podem ser compartilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Com o WhatsApp, para processamento de mensagens de compra</li>
              <li>Com autoridades legais, quando exigido por lei</li>
              <li>Com prestadores de serviços essenciais para operação do site (hospedagem, analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Empregamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais 
              contra acesso não autorizado, perda, destruição ou alteração. Utilizamos criptografia SSL/TLS 
              para proteger a transmissão de dados e mantemos backups regulares.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Nosso site utiliza cookies para melhorar a experiência do usuário, analisar o tráfego e 
              personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso 
              pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Direitos do Usuário (LGPD)</h2>
            <p className="text-muted-foreground mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), você tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Para exercer seus direitos, entre em contato conosco através do WhatsApp (12) 98861-0001.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Retenção de Dados</h2>
            <p className="text-muted-foreground mb-4">
              Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades 
              descritas nesta política, salvo se um período de retenção maior for exigido ou permitido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Alterações na Política de Privacidade</h2>
            <p className="text-muted-foreground mb-4">
              Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. 
              Recomendamos que você revise periodicamente esta página para se manter informado sobre 
              como estamos protegendo suas informações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus 
              dados pessoais, entre em contato conosco:
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Visite Campos</strong><br />
              CNPJ: 52.722.772/0001-30<br />
              Endereço: Avenida Emílio Ribas, 644 - Capivari, Campos do Jordão - SP<br />
              WhatsApp: (12) 98861-0001
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic mt-8">
            Última atualização: Novembro de 2025
          </p>
        </div>
      </main>
    </div>
  );
}
