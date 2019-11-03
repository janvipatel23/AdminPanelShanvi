import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AddEvent } from './add-event';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  private dbPath = '/Events';
  private basePath = '/uploads';
  addeventRef: AngularFirestoreCollection<AddEvent> = null;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    //this.addeventRef = db.collection(this.dbPath);
  }

  pushFileToStorage(addevent: AddEvent): Observable<any> {
    console.log(addevent.file.name);
    const filePath = `${this.basePath}/${addevent.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, addevent.file);
    //console.log("after upload");
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          addevent.Event_Image_Link = downloadURL;  
          this.saveFileData(addevent);

        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }


  private saveFileData(addevent: AddEvent) {
    this.createEvent(addevent);

  }
//uploading data into firestore
  createEvent(addevent: AddEvent): void {
    this.addeventRef.doc(addevent.Event_Name).set({ ...addevent });
  }

}
