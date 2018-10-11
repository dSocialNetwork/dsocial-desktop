export default ($scope, $rootScope, dSocialService, activeUsername) => {

  $scope.loadingImages = true;
  $scope.images = [];

  const fetchImages = () => {
    dSocialService.getImages(activeUsername()).then((resp) => {
      $scope.images = resp.data;
    }).catch((e) => {
      $rootScope.showError('Could not fetch images!');
    }).then(() => {
      $scope.loadingImages = false;
    });
  };

  fetchImages();
};
