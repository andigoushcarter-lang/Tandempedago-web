let selectedFiles = [];
  function handleFiles(files) {
    for (let f of files) {
      if (f.size > 5*1024*1024) { showToast('⚠️ "'+f.name+'" dépasse 5 Mo.','error'); continue; }
      if (!selectedFiles.find(x=>x.name===f.name)) selectedFiles.push(f);
    }
    renderFileList();
  }
  function renderFileList() {
    const list = document.getElementById('fileList'); list.innerHTML='';
    selectedFiles.forEach((f,i)=>{ const el=document.createElement('div'); el.className='file-item'; el.innerHTML='<span>📄 '+f.name+' ('+(f.size/1024).toFixed(0)+' Ko)</span><span class="rm" onclick="removeFile('+i+')">✕</span>'; list.appendChild(el); });
  }
  function removeFile(i) { selectedFiles.splice(i,1); renderFileList(); }
  function showToast(msg,type='success') { const t=document.getElementById('toast'); t.textContent=msg; t.className='toast '+type+' show'; setTimeout(()=>t.className='toast',4000); }
  function submitEleveForm(e) {
    e.preventDefault(); const f=e.target;
    const d={nom:f.nom.value,whatsapp:f.whatsapp.value,commune:f.commune.value,niveau:f.niveau.value,matiere:f.matiere.value,dispo:f.dispo.value,message:f.message.value};
    const body=encodeURIComponent("Nouvelle demande de cours — Tandem Pédago\n\nNom : "+d.nom+"\nWhatsApp : "+d.whatsapp+"\nCommune : "+d.commune+"\nNiveau : "+d.niveau+"\nMatière : "+d.matiere+"\nDisponibilités : "+(d.dispo||"Non précisé")+"\nMessage : "+(d.message||"Aucun"));
    window.open("mailto:tandempedagoabidjan@gmail.com?subject="+encodeURIComponent("Demande de cours - "+d.nom)+"&body="+body);
    const wa="Bonjour Tandem Pédago ! Je m'appelle "+d.nom+", je souhaite un cours de "+d.matiere+" pour un élève en "+d.niveau+" à "+d.commune+". Disponibilités : "+(d.dispo||"à définir")+".";
    setTimeout(()=>window.open("https://wa.me/2250151456427?text="+encodeURIComponent(wa)),900);
    document.getElementById('form-eleve-success').style.display='block'; f.style.display='none';
    showToast('✅ Demande envoyée avec succès !');
  }
  function submitProfForm(e) {
    e.preventDefault(); const f=e.target;
    const d={nom:f.nom.value,whatsapp:f.whatsapp.value,commune:f.commune.value,niveau:f.niveau.value,matieres:f.matieres.value,motivation:f.motivation.value};
    if(selectedFiles.length===0){showToast('⚠️ Veuillez joindre au moins un document.','error');return;}
    const body=encodeURIComponent("Nouvelle candidature enseignant — Tandem Pédago\n\nNom : "+d.nom+"\nWhatsApp : "+d.whatsapp+"\nCommune : "+d.commune+"\nNiveau : "+d.niveau+"\nMatières : "+d.matieres+"\nMotivation : "+(d.motivation||"Non précisé")+"\n\nDocuments : "+selectedFiles.map(x=>x.name).join(', '));
    window.open("mailto:tandempedagoabidjan@gmail.com?subject="+encodeURIComponent("Candidature enseignant - "+d.nom)+"&body="+body);
    document.getElementById('form-prof-success').style.display='block'; f.style.display='none';
    showToast('✅ Candidature envoyée avec succès !');
  }