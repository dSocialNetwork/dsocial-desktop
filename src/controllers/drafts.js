export default ($scope, $rootScope, $location, dSocialService, activeUsername) => {

  $scope.loadingDrafts = true;
  $scope.drafts = [];

  const fetchDrafts = () => {
    dSocialService.getDrafts(activeUsername()).then((resp) => {
      const d = [];
      for (let i of resp.data) {
        if (i) {
          d.push(i);
        }
      }
      $scope.drafts = d;
    }).catch((e) => {
      $rootScope.showError('Could not fetch drafts!');
    }).then(() => {
      $scope.loadingDrafts = false;
    });
  };

  fetchDrafts();

  $rootScope.$on('DRAFT_DELETED', () => {
    fetchDrafts();
  });

  $rootScope.$on('userLoggedOut', () => {
    $location.path('/');
  });
};
