# Deployer un projet Next.js static sur github
* Copier le dossier .github et le coller à la racine du projet
* Appliquer les changements pour eviter le probleme Artifact (Section suivante)
* Tester le build en local avec npm run build
* Faire le push
* Dans github, Aller dans Settings => Pages => Dans source, choisir Github Actions
* Rendre le projet public en allant dans Settings => Collaborators => Choisir Manage et changer 

# Artifact error exit code: 2 when build Nextjs
Solution : Fixed NextJs build workflow by renaming the next.config.mjs to next.config.js and changing the export statement to use commonjs type.