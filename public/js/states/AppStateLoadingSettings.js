class AppStateLoadingSettings extends BaseAppState{
    execute(){
        super.execute();

        PIXI.loader.add('image', 'image.jpg').load((loader, resources) => {   
    }
}