#import "RCTLinearGradientManager.h"
#import "RCTLinearGradient.h"
#import "RCTBridge.h"

@implementation RCTLinearGradientManager

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RCTLinearGradient alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
RCT_EXPORT_VIEW_PROPERTY(start, NSArray);
RCT_EXPORT_VIEW_PROPERTY(end, NSArray);
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);

- (NSDictionary *)constantsToExport
{
  return @{};
}

@end
