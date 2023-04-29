# My_Page

My_Page is the first one. Here we find a menù which lead to other pages.

We can find some JS formules to convert hours in minute and viceversa.

There is also the landing page from The Odin Project.

Here, on My_Page, we find also some random images.


- Crea un file;
- Git status (le modifiche non pushate sono rosse);
- Git add .(= per mandare tutte le modifiche nella staging area);
- Git add <File> Per mandare le modifiche sul file che ti interessa;
- Git rm —cached <file> per rimuovere un file dalla stagni area (dopo Git add .)
- Git commit (= se le modifiche sono già state committate non fa nulla) => git commit -m “Nome commit”
- Git Checkout <id del commit> per vedere il codice a quel commit (Read only) [usa Git log per vedere gli id, per tornare al passo git checkout master];
- Git Revert <id del commit> ci fa repertare un commit (rischia di rovinare la repo), come se cancellasse il commit (anche se non lo cancella veramennte) [per uscire dal terminale che apre shif : e scrivi wq];
- Git Reset <id del commit> è come se tornassi indietro ad un certo commit e cancellassi quelli dopo[rischia di distruggere la repo però non modifica il file che ho aperto];
- Git Reset <id del commit> --hard per cancellare anche le modifiche al file che ho aperto da DOPO quel commit [PERMANENTE];
- Git log (= per vedere chi e quando fa le modifiche a un file);
- Git log  --oneline (per vedere in una linea (solo id e messaggio del commit);
- Git branch <nome branch> per creare un nuovo branch;
- Git branch -a per vedere tutti i branch;
- Git checkout ‘nomebranch’ per cambiare branch;
- Git branch -d nomebranch per cancellare il branch (devi essere sul branch principale);
- Git branch -D nomebranch per cancellare un branch non fully merged;
- Git checkout -b ‘nomebranch’ per creare un nuovo branch ed entrarci;
- Git merge nomebranch => devi essere sul branch che deve ricevere il merge (verosimilmente il master);
- Per risolvere un Conflict dopo un merge fai git commit (senza messaggio questa volta) => shift : e scrivi wq;
- Fork: forki la repo, la cloni, la modifichi, Git add . Git commit -m “messaggio” e git push poi su GitHub fai la pull request e l’autore della repo può approvarlo così da modificare l’originale;
- Git push per mandare le modifiche su GitHub;
- Git push Origin main per essere più specifici se ci sono più branch nella cartella.
- Code . Quando sei nella cartella per aprirla con VS Code;
- npx create-react-app nomecartella per creare un progetto React